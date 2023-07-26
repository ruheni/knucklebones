import { usePlayerPartialScore } from "~/features/game/hooks/usePlayerPartialScore";
import type { PlayerNumber } from "~/features/game/types";

export const usePlayerTotalScore = ({ playerNumber }: { playerNumber: PlayerNumber }) => {
  const { column1Score, column2Score, column3Score } = usePlayerPartialScore({ playerNumber });

  return column1Score + column2Score + column3Score;
};
