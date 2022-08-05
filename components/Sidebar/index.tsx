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

const Sidebar = () => {
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
      <SidebarButton>start a new chat</SidebarButton>
    </Container>
  );
};

export default Sidebar;
