import * as React from "react";
import { api } from "~/utils/api";
import { Skeleton, Text } from "@chakra-ui/react";

type Props = {
  playerName: string;
  delta: number;
};
export const TotalScore = ({ playerName, delta }: Props) => {
  const getGames = api.game.getGamesByPlayer.useQuery({ playerName });
  return (
    <Skeleton isLoaded={!getGames.isLoading}>
      <Text>{(delta * 10) + (((getGames.data?.length) || 0) * 10)}</Text>
    </Skeleton>
  );
};
