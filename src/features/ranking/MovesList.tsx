import * as React from "react";
import { api } from "~/utils/api";
import {
  Skeleton, Stack, Text,
} from "@chakra-ui/react";

type Props = {
  gameId: string;
};
export const MovesList = ({ gameId }: Props) => {
  const getMoves = api.game.getMovesByGame.useQuery({ gameId });

  if (getMoves.isLoading) {
    return (
      <Stack>
        <Skeleton height="24px" />
        <Skeleton height="24px" />
        <Skeleton height="24px" />
      </Stack>
    );
  }

  return (
    <Stack>
      {getMoves.data?.map(({
        id, player, opponent, playerValues, opponentValues,
      }) => (
        <Stack key={id}>
          <Text fontSize="lg">{`${player} ${playerValues} = 0 - ${opponent} ${opponentValues} = 0`}</Text>
        </Stack>
      ))}
    </Stack>
  );
};
