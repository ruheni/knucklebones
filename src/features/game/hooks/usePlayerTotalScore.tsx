import { usePlayerPartialScore } from "~/features/game/hooks/usePlayerPartialScore";

export const usePlayerTotalScore = ({ playerNumber }: { playerNumber: number }) => {
  const { column1Score, column2Score, column3Score } = usePlayerPartialScore({ playerNumber });

  return column1Score + column2Score + column3Score;
};
