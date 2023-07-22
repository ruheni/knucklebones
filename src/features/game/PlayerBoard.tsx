import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { DiceBoard } from "~/features/game/DiceBoard";
import { PartialScore } from "~/features/game/PartialScore";
import { PlayerInfos } from "~/features/game/PlayerInfos";
import type { PlayerNumber } from "~/features/game/types";

type Props = {
  playerName: string;
  playerNumber: PlayerNumber;
  values: number[];
  round: number;
  currentDie?: number;
  onRollDieHandler: () => void;
  player: number;
};

export const PlayerBoard = ({
  playerName, playerNumber, values, round, currentDie, onRollDieHandler, player,
}: Props) => (
  <Stack direction={playerNumber === "one" ? "row-reverse" : "row"} spacing={12} width="900px">
    <Box width="400px" />
    <Flex direction={playerNumber === "one" ? "column-reverse" : "column"} width="300px">
      <PartialScore values={values} />
      <DiceBoard values={values} name={playerName} />
    </Flex>
    <PlayerInfos
      playerName={playerName}
      round={round}
      playerNumber={playerNumber}
      dieValue={currentDie}
      onRollDieHandler={onRollDieHandler}
    />
  </Stack>
);
