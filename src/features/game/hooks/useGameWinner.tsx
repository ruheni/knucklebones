import { usePlayerTotalScore } from "~/features/game/hooks/usePlayerTotalScore";
import { useGame } from "~/features/game/GameContext";
import { useGameOver } from "~/features/game/hooks/useGameOver";

export const useGameWinner = () => {
  const { state: { players } } = useGame();
  const { isGameOver } = useGameOver();
  const playerScore = usePlayerTotalScore({ playerNumber: 0 });
  const opponentScore = usePlayerTotalScore({ playerNumber: 1 });

  if (isGameOver) {
    return {
      winnerName: (playerScore > opponentScore ? players[0]?.name : players[1]?.name) || "Player",
      score: playerScore > opponentScore
        ? playerScore
        : opponentScore,
      delta: playerScore > opponentScore
        ? playerScore - opponentScore
        : opponentScore - playerScore,
    };
  }

  return {
    winnerName: "",
    score: 0,
    delta: 0,
  };
};
