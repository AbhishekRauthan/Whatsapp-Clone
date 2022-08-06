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

const Sidebar = () => {
  function createChat() {
    const input = prompt("Enter email of user you want to chat with:");
    if (!input) return null;
    if (validate(input)) {
    }
  }
  return (
    <Container>
      <Header>
        <UserAvatar />
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
    </Container>
  );
};

export default Sidebar;
