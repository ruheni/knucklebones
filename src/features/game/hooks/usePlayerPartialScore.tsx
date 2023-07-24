import { PARTIAL_SCORE_MAP } from "~/features/game/constant";
import { useGame } from "~/features/game/GameContext";

type Props = {
  playerNumber: number;
};

export const usePlayerPartialScore = ({ playerNumber }: Props) => {
  const { state: { players } } = useGame();

  const result = PARTIAL_SCORE_MAP.reduce((
    acc,
    columnCells,
    columnIndex,
  ) => {
    const values = players[playerNumber]?.values || [];
    return {
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
    };
  }, ({
    column1Score: 0,
    column2Score: 0,
    column3Score: 0,
  }));

  return result;
};
