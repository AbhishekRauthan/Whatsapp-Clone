import { collection, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../utils/firebase";
import { Container, UserAvatar } from "./style";
import { useRouter } from "next/router";

const Chat = ({ id, users }: { id: string; users: any[] }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  function getEmail() {
    return users.filter((userFilter) => userFilter !== user?.email)[0];
  }
  const recipientEmail = getEmail();
  const [recipientSnapshot] = useCollection(
    query(collection(db, "users"), where("email", "==", recipientEmail))
  );
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  return (
    <Container onClick={enterChat}>
      <UserAvatar src={recipient?.photoURL} />
      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;
