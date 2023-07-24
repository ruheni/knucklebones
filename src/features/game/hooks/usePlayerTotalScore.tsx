import { usePlayerColumnsScore } from "~/features/game/hooks/usePlayerColumnsScore";

export const usePlayerTotalScore = ({ playerNumber }: { playerNumber: number }) => {
  const { column1Score, column2Score, column3Score } = usePlayerColumnsScore({ playerNumber });

  return column1Score + column2Score + column3Score;
};
