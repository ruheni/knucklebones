import { Flex } from "@chakra-ui/react";
import { useGame } from "~/features/game/GameContext";

type Props = {
  playerNumber: number;
};

export const PartialScore = ({ playerNumber }: Props) => {
  const { state: { players } } = useGame();

  const partialScoreFirstColumn = (players[playerNumber]?.values[0] || 0)
      + (players[playerNumber]?.values[3] || 0)
      + (players[playerNumber]?.values[6] || 0);

  const partialScoreSecondColumn = (players[playerNumber]?.values[0] || 0)
        + (players[playerNumber]?.values[3] || 0)
        + (players[playerNumber]?.values[6] || 0);

  const partialScoreThirdColumn = (players[playerNumber]?.values[0] || 0)
        + (players[playerNumber]?.values[3] || 0)
        + (players[playerNumber]?.values[6] || 0);

  return (
    <Flex gap={4} px={8}>
      <Flex
        width="50px"
        height="50px"
        alignItems="center"
        justifyContent="center"
      >
        {partialScoreFirstColumn}
      </Flex>
      <Flex
        width="50px"
        height="50px"
        alignItems="center"
        justifyContent="center"
      >
        {partialScoreSecondColumn}
      </Flex>
      <Flex
        width="50px"
        height="50px"
        alignItems="center"
        justifyContent="center"
      >
        {partialScoreThirdColumn}
      </Flex>
    </Flex>
  );
};
