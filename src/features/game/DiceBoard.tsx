import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Die } from "~/features/game/Die";
import { useGame } from "~/features/game/GameContext";

interface Props {
  playerNumber: number;
}

export const DiceBoard = ({ playerNumber }: Props) => {
  const { state: { players } } = useGame();
  const onClickHandler = (i: number) => {
    console.log("click", i);
  };

  return (
    <Flex justifyContent="center" alignItems="center" px={8}>
      <SimpleGrid columns={3} row={3} spacing={4}>
        {players[playerNumber]?.values.map((value, index) => (
          <Die key={crypto.randomUUID()} value={value} onClick={() => onClickHandler(index)} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
