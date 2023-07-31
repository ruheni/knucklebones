import * as React from "react";
import { api } from "~/utils/api";
import { Skeleton, Text } from "@chakra-ui/react";
import { calculateTotalPlayerScore } from "~/features/ranking/utils/calculateTotalPlayerScore";

type Props = {
  playerName: string | null;
  delta: number | null;
};
export const TotalScore = ({ playerName = "", delta = 0 }: Props) => {
  if (playerName === null || delta === null) {
    return null;
  }
  const { isLoading, data } = api.game.getGamesByPlayer.useQuery({ playerName });
  return (
    <Skeleton isLoaded={!isLoading}>
      <Text>{calculateTotalPlayerScore({ delta, games: data?.length })}</Text>
    </Skeleton>
  );
};
