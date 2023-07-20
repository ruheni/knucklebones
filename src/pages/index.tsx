import * as React from "react";
import Head from "next/head";
import {Box, Flex} from "@chakra-ui/react";
import {GameForm, type GameFormValues} from "~/features/game/GameForm";
import {GameDashboard} from "~/features/game/GameDashboard";

export interface Players {
    playerOne: string;
    playerTwo: string;
}

export default function Home() {
  const [players, setPlayers] = React.useState<Players>();

  const onSubmitHandler = (values: GameFormValues) => {
    setPlayers(values);
  }

  const getContent = () => {
      if (players) {
          return <GameDashboard onQuit={() => setPlayers(undefined)} players={players} />
      }
      return <GameForm initialValues={{playerOne: "", playerTwo: ""}} onSubmit={(values) => onSubmitHandler(values)} />
  }

  return (
    <>
      <Head>
        <title>Knucklebones</title>
        <meta name="description" content="Knucklebones game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m={8}>
          {getContent()}
      </Box>
    </>
  );
}
