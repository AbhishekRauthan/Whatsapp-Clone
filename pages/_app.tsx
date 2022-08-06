import type { AppProps } from "next/app";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import { auth } from "../utils/firebase";
import Login from "./login";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
