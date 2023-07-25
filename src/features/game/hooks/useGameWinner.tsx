import { usePlayerTotalScore } from "~/features/game/hooks/usePlayerTotalScore";
import { useGame } from "~/features/game/GameContext";

export const useGameWinner = () => {
  const { state: { players } } = useGame();
  const playerScore = usePlayerTotalScore({ playerNumber: 0 });
  const opponentScore = usePlayerTotalScore({ playerNumber: 1 });

  return {
    winnerName: (playerScore > opponentScore ? players[0]?.name : players[1]?.name) || "Player",
    score: playerScore > opponentScore ? playerScore : opponentScore,
  };
};
