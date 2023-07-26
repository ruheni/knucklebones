import { useGame } from "~/features/game/components/GameContext";
import { calculatePartialScore } from "~/features/game/utils/calculatePartialScore";

type Props = {
  playerNumber: number;
};

export const usePlayerPartialScore = ({ playerNumber }: Props) => {
  const { state: { players } } = useGame();
  const values = players[playerNumber]?.values || [];

  const partialScores = calculatePartialScore({ values });

  return partialScores;
};
