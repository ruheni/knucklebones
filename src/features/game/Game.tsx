import { useGame } from "~/features/game/GameContext";
import type { GameFormValues } from "~/features/game/GameForm";
import { GameForm } from "~/features/game/GameForm";
import { GameBoard } from "~/features/game/GameBoard";
import * as React from "react";
import { api } from "~/utils/api";

export const Game = () => {
  const { state: { players }, dispatch } = useGame();
  const startGame = api.game.startGame.useMutation({
    onSuccess: (data) => {
      console.log("data", data);
      // save data.id on the context to pass it to addMove.mutate
    },
  });
  const onSubmitHandler = async (values: GameFormValues) => {
    startGame.mutate({
      player: values.playerOne,
      opponent: values.playerTwo,
    });
    dispatch({ type: "addPlayers", payload: values });
  };

  if (players.length === 2) {
    return <GameBoard onQuit={() => dispatch({ type: "quitGame" })} />;
  }

  return (
    <GameForm
      initialValues={{ playerOne: "Teo", playerTwo: "Noa" }}
      onSubmit={(values) => onSubmitHandler(values)}
    />
  );
};
