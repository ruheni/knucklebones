import { calculatePartialScore } from "~/features/game/utils/calculatePartialScore";

type Props = {
  values: number[];
};

export const calculateTotalScore = ({ values }: Props) => {
  const partialScores = calculatePartialScore({ values });

  return partialScores.column1Score + partialScores.column2Score + partialScores.column3Score;
};
