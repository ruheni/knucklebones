import * as React from "react";
import Head from "next/head";
import {
  Button,
  Heading, Skeleton, Stack, Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { MovesList } from "~/features/ranking/MovesList";

const History = () => {
  const { query: { playerName }, back } = useRouter();
  const getGames = api.game.getGamesByPlayer.useQuery({
    playerName: playerName as string,
  });

  const getContent = () => {
    if (getGames.isLoading) {
      return (
        <>
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
        </>
      );
    }
    return (
      getGames.data?.map(({
        id, player, opponent,
      }) => (
        <Stack key={id}>
          <Text fontSize="2xl">{`vs. ${player === playerName ? opponent : player}`}</Text>
          <MovesList gameId={id} />
        </Stack>
      ))
    );
  };

  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing={16}>
        <Button onClick={back} alignSelf="center">Back to ranking</Button>
        <Heading alignSelf="center">{`${playerName}'s History`}</Heading>
        <Stack spacing={12}>
          {getContent()}
        </Stack>
      </Stack>
    </>
  );
};

export default History;
