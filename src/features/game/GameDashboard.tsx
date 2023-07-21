import * as React from "react";
import { Button, Divider, Stack } from "@chakra-ui/react";
import { PlayerBoard } from "~/features/game/PlayerBoard";
import type { Players } from "~/features/game/types";

interface Props {
  players: Players;
  onQuit: () => void;
}
export const GameDashboard = ({ onQuit, players }: Props) => {
  const { name: namePlayerOne, values: valuesPlayerOne } = players.playerOne;
  const { name: namePlayerTwo, values: valuesPlayerTwo } = players.playerTwo;
  const [round, setRound] = React.useState(0);
  const [currentDie, setCurrentDie] = React.useState<number>();

  const onRollDieHandler = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setCurrentDie(newValue);
  };

  return (
    <Stack direction="column" spacing={12}>
      <Button onClick={onQuit} alignSelf="start">Quit game</Button>
      <Stack direction="column" spacing={4} alignItems="center">
        <PlayerBoard
          playerName={namePlayerOne}
          playerNumber="one"
          values={valuesPlayerOne}
          round={round}
          currentDie={round % 2 === 0 ? currentDie : undefined}
          onRollDieHandler={onRollDieHandler}
        />
        <Divider />
        <PlayerBoard
          playerName={namePlayerTwo}
          playerNumber="two"
          values={valuesPlayerTwo}
          round={round}
          currentDie={round % 2 === 1 ? currentDie : undefined}
          onRollDieHandler={onRollDieHandler}
        />
      </Stack>
    </Stack>
  );
};
