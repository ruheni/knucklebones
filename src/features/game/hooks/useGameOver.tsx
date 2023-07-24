import { useGame } from "~/features/game/GameContext";
import { usePlayerTotalScore } from "~/features/game/hooks/usePlayerTotalScore";

export const useGameOver = () => {
  const { state: { players } } = useGame();
  const scorePlayerOne = usePlayerTotalScore({ playerNumber: 0 });
  const scorePlayerTwo = usePlayerTotalScore({ playerNumber: 1 });
  const winnerName = scorePlayerOne > scorePlayerTwo ? players[0]?.name : players[1]?.name;

  return {
    isGameOver: players.some((player) => player.values.every((value) => value !== 0)),
    winnerName,
  };
};
