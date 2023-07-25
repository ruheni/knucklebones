import { useGame } from "~/features/game/GameContext";

export const useGameOver = () => {
  const { state: { players } } = useGame();

  return {
    isGameOver: players.some((player) => player.values.every((value) => value !== 0)),
  };
};
