import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { DiceBoard } from "~/features/game/components/DiceBoard";
import { PartialScore } from "~/features/game/components/PartialScore";
import { PlayerInfos } from "~/features/game/components/PlayerInfos";
import type { PlayerNumber } from "~/features/game/types";

type Props = {
  playerNumber: PlayerNumber;
};

export const PlayerBoard = ({
  playerNumber,
}: Props) => (
  <Stack direction={playerNumber === 0 ? "row-reverse" : "row"} spacing={12} width="900px">
    <Box width="400px" />
    <Flex direction={playerNumber === 0 ? "column-reverse" : "column"} width="300px">
      <PartialScore playerNumber={playerNumber} />
      <DiceBoard playerNumber={playerNumber} />
    </Flex>
    <PlayerInfos
      playerNumber={playerNumber}
    />
  </Stack>
);
