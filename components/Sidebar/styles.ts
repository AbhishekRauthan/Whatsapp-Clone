import styled from "@emotion/styled";
import { Avatar, Button } from "@mui/material";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 3px solid whitesmoke;
`;

export const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const IconsContainer = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

export const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
  color: #000;
`;
