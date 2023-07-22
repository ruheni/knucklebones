import { useGame } from "~/features/game/GameContext";
import type { GameFormValues } from "~/features/game/GameForm";
import { GameForm } from "~/features/game/GameForm";
import { GameDashboard } from "~/features/game/GameDashboard";
import * as React from "react";

export const Game = () => {
  const { state: { players }, dispatch } = useGame();
  const onSubmitHandler = (values: GameFormValues) => {
    dispatch({ type: "addPlayers", payload: values });
  };

  if (players.length === 2) {
    return <GameDashboard onQuit={() => dispatch({ type: "quitGame" })} />;
  }

  return (
    <GameForm
      initialValues={{ playerOne: "Teo", playerTwo: "Noa" }}
      onSubmit={(values) => onSubmitHandler(values)}
    />
  );
};
