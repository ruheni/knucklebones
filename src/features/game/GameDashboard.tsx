import * as React from "react";
import { Button, Divider, Stack } from "@chakra-ui/react";
import { PlayerBoard } from "~/features/game/PlayerBoard";
import { useGame } from "~/features/game/GameContext";

interface Props {
  onQuit: () => void;
}
export const GameDashboard = ({ onQuit }: Props) => {
  const { state: { players, round } } = useGame();
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
          playerNumber={0}
          currentDie={round % 2 === 0 ? currentDie : undefined}
          onRollDieHandler={onRollDieHandler}
        />
        <Divider />
        <PlayerBoard
          playerNumber={1}
          currentDie={round % 2 === 1 ? currentDie : undefined}
          onRollDieHandler={onRollDieHandler}
        />
      </Stack>
    </Stack>
  );
};
