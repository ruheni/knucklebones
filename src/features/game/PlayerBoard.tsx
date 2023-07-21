import { Flex, Stack } from "@chakra-ui/react";
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
};

export const PlayerBoard = ({
  playerName, playerNumber, values, round, currentDie, onRollDieHandler,
}: Props) => (
  <Stack direction="row" spacing={12}>
    <Flex direction={playerNumber === "one" ? "column-reverse" : "column"}>
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
