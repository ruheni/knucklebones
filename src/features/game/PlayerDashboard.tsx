import { Flex } from "@chakra-ui/react";
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
  position?: "left" | "right";
};

export const PlayerDashboard = ({
  playerName, playerNumber, values, round, position = "left",
}: Props) => {
  const [dieValuePlayerOne, setDieValuePlayerOne] = React.useState<number>();
  const [dieValuePlayerTwo, setDieValuePlayerTwo] = React.useState<number>();

  const onRollDieHandler = (_playerNumber: PlayerNumber) => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    if (_playerNumber === "one") {
      setDieValuePlayerOne(newValue);
    }
    setDieValuePlayerTwo(newValue);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <PlayerInfos
        playerName={playerName}
        round={round}
        showDetails={position === "left"}
        playerNumber={playerNumber}
        dieValue={dieValuePlayerOne}
        onRollDieHandler={onRollDieHandler}
      />
      <Flex direction={position === "left" ? "column-reverse" : "column"}>
        <PartialScore values={values} />
        <DiceBoard values={values} name={playerName} />
      </Flex>
      <PlayerInfos
        playerName={playerName}
        round={round}
        showDetails={position === "right"}
        playerNumber={playerNumber}
        dieValue={dieValuePlayerTwo}
        onRollDieHandler={onRollDieHandler}
      />
    </Flex>
  );
};
