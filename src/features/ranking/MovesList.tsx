import * as React from "react";
import { api } from "~/utils/api";
import { Box, Spinner, Stack } from "@chakra-ui/react";

type Props = {
  gameId: string;
};
export const MovesList = ({ gameId }: Props) => {
  const getMoves = api.game.getMovesByGame.useQuery({ gameId });

  if (getMoves.isLoading) {
    return <Spinner />;
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
