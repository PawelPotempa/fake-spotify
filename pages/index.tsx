import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import { getSession } from "next-auth/react";
import Player from "@/components/Player";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Hero />
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default Home;
