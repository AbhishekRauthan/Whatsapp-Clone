import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  font-family: sans-serif;
  :hover {
    background-color: #e9eaeb;
  }
`;

export const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
