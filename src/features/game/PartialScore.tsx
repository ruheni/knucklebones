import { Flex } from "@chakra-ui/react";
import { useGame } from "~/features/game/GameContext";

type Props = {
  playerNumber: number;
};

const PARTIAL_SCORE_MAP: Record<number, number[]> = {
  0: [0, 3, 6],
  1: [1, 4, 7],
  2: [2, 5, 8],
};

export const PartialScore = ({ playerNumber }: Props) => {
  const { state: { players } } = useGame();
  const calculatePartialScore = (column: number) => {
    const columnCells = PARTIAL_SCORE_MAP[column] || [];

    const result = columnCells.reduce((
      acc,
      cellIndex,
    ) => {
      const occurrences = players[playerNumber]?.values
        .filter((v, i) => v !== 0 && columnCells.includes(i))
        .filter((v) => v === players[playerNumber]?.values[cellIndex])
        .length || 1;
      return acc + ((players[playerNumber]?.values[cellIndex] || 0) * occurrences);
    }, 0);

    return result;
  };

  return (
    <Flex gap={4} px={8}>
      <Flex
        width="50px"
        height="50px"
        alignItems="center"
        justifyContent="center"
      >
        {calculatePartialScore(0)}
      </Flex>
      <Flex
        width="50px"
        height="50px"
        alignItems="center"
        justifyContent="center"
      >
        {calculatePartialScore(1)}
      </Flex>
      <Flex
        width="50px"
        height="50px"
        alignItems="center"
        justifyContent="center"
      >
        {calculatePartialScore(2)}
      </Flex>
    </Flex>
  );
};
