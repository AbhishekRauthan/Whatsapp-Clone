import {
  Container,
  Header,
  UserAvatar,
  IconsContainer,
  SearchContainer,
  SearchInput,
  SidebarButton,
} from "./styles";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { validate } from "email-validator";
import { auth, db } from "../../utils/firebase";
import { collection, addDoc, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "../Chat";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const userChatRef = query(
    collection(db, "chats"),
    where("users", "array-contains", user?.email)
  );
  const [chatSnapshot] = useCollection(userChatRef);
  function createChat() {
    const input = prompt("Enter email of user you want to chat with:");
    if (!input) return null;
    if (validate(input) && user?.email !== input && !chatAlreadyExits(input)) {
      console.log();
      addDoc(collection(db, "chats"), {
        users: [user?.email, input],
      });
    }
  }

  const chatAlreadyExits = (recipientEmail: string) =>
    !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user: string) => user === recipientEmail)
          ?.length > 0
    );
  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} src={user?.photoURL as string} />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <SearchContainer>
        <SearchIcon />
        <SearchInput placeholder="Search in chat" />
      </SearchContainer>
      <SidebarButton onClick={createChat}>start a new chat</SidebarButton>
      <>
        {chatSnapshot?.docs.map((chat) => (
          <Chat key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </>
    </Container>
  );
};

export default Sidebar;
