import * as React from "react";
import { Button, Divider, Stack } from "@chakra-ui/react";
import { PlayerBoard } from "~/features/game/PlayerBoard";

interface Props {
  onQuit: () => void;
}
export const GameBoard = ({ onQuit }: Props) => (
  <Stack direction="column" spacing={12}>
    <Button onClick={onQuit} alignSelf="start">Quit game</Button>
    <Stack direction="column" spacing={4} alignItems="center">
      <PlayerBoard
        playerNumber={0}
      />
      <Divider />
      <PlayerBoard
        playerNumber={1}
      />
    </Stack>
  </Stack>
);
