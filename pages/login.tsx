import { LoginContainer, Logo, Container, LoginButton } from "../styles/login";
import NextHead from "next/head";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const login = () => {
  function signIn() {
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  }
  return (
    <Container>
      <NextHead>
        <title>Login</title>
      </NextHead>
      <LoginContainer>
        <Logo src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png" />
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default login;
