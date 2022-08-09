import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { Container, UserAvatar } from "./style";

const Chat = ({ id, users }: { id: string; users: any[] }) => {
  const [user] = useAuthState(auth);

  function getEmail() {
    return users.filter((userFilter) => userFilter !== user?.email)[0];
  }
  const recipientEmail = getEmail();
  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;
