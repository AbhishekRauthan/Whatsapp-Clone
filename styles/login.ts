import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

export const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

export const LoginButton = styled(Button)`
  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
  :hover {
    background-color: rgba(200, 200, 200, 50%);
  }
  color: #000;
`;
