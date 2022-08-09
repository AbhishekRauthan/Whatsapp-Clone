import type { AppProps } from "next/app";
import { useEffect } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import { auth, db } from "../utils/firebase";
import Login from "./login";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const capUsr = async () => {
        await setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            lastSeen: serverTimestamp(),
            photoUrl: user.photoURL,
          },
          { merge: true }
        );
      };
      capUsr();
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
