import { PARTIAL_SCORE_MAP } from "~/features/game/constant";

type Props = {
  values: number[];
};
export const calculatePartialScore = ({ values }: Props) => PARTIAL_SCORE_MAP.reduce((
  acc,
  columnCells,
  columnIndex,
) => ({
  ...acc,
  [`column${columnIndex + 1}Score`]: columnCells.reduce((
    accumulator,
    cellIndex,
  ) => {
    const occurrences = values
      .filter((v, i) => v !== 0 && columnCells.includes(i))
      .filter((v) => v === values[cellIndex])
      .length || 1;
    return accumulator + ((values[cellIndex] || 0) * occurrences);
  }, 0),
}), ({
  column1Score: 0,
  column2Score: 0,
  column3Score: 0,
}));
