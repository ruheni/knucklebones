import * as React from "react";
import Head from "next/head";
import { GameProvider } from "~/features/game/components/GameContext";
import { Game } from "~/features/game/Game";

const Home = () => (
  <>
    <Head>
      <title>Knucklebones</title>
      <meta name="description" content="Knucklebones game" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GameProvider>
      <Game />
    </GameProvider>
  </>
);

export default Home;
