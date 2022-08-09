import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar/index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
      </Head>

      <Sidebar />
    </div>
  );
};

export default Home;
