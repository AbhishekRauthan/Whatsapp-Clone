import NextHead from "next/head";
import Sidebar from "../../components/Sidebar";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatPage = ({ chat, messages }: { chat: any; messages: any }) => {
  const [user] = useAuthState(auth);
  
  return (
    <Container>
      <NextHead>Chat</NextHead>
      <Sidebar />
      <ChatContainer>This is a chat</ChatContainer>
    </Container>
  );
};

export default ChatPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const ref = doc(collection(db, "chats"), id as string);

  const messageRes = await getDocs(
    query(collection(ref, "messages"), orderBy("timestamp", "asc"))
  );

  const messages = messageRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((mes: any) => ({
      ...mes,
      timestamp: mes.timestamp.toDate().getTime(),
    }));

  const chatRef = await getDoc(ref);
  const chat = {
    id: chatRef.id,
    ...chatRef.data(),
  };
  return {
    props: {
      messages: JSON.stringify(messages),
      chat,
    },
  };
};

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
