import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { DiceBoard } from "~/features/game/DiceBoard";
import { PartialScore } from "~/features/game/PartialScore";
import { PlayerInfos } from "~/features/game/PlayerInfos";
import type { PlayerNumber } from "~/features/game/types";

type Props = {
  playerNumber: PlayerNumber;
  currentDie?: number;
  onRollDieHandler: () => void;
};

export const PlayerBoard = ({
  playerNumber, currentDie, onRollDieHandler,
}: Props) => (
  <Stack direction={playerNumber === 0 ? "row-reverse" : "row"} spacing={12} width="900px">
    <Box width="400px" />
    <Flex direction={playerNumber === 0 ? "column-reverse" : "column"} width="300px">
      <PartialScore playerNumber={playerNumber} />
      <DiceBoard playerNumber={playerNumber} />
    </Flex>
    <PlayerInfos
      playerNumber={playerNumber}
      dieValue={currentDie}
      onRollDieHandler={onRollDieHandler}
    />
  </Stack>
);
