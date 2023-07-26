import * as React from "react";
import { api } from "~/utils/api";
import {
  Box, Skeleton, Stack,
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
          <Box>{`${player} ${playerValues} = 0 - ${opponent} ${opponentValues} = 0`}</Box>
        </Stack>
      ))}
    </Stack>
  );
};
