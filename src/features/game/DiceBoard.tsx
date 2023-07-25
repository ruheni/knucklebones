import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Die } from "~/features/game/Die";
import { useGame } from "~/features/game/GameContext";
import { api } from "~/utils/api";

interface Props {
  playerNumber: number;
}

export const DiceBoard = ({ playerNumber }: Props) => {
  const { state: { players, gameId }, dispatch } = useGame();
  const addMove = api.game.addMove.useMutation();

  const onClickHandler = (position: number) => {
    if (players[playerNumber]?.valueToPlace) {
      const opponentNumber = playerNumber === 0 ? 1 : 0;
      addMove.mutate({
        gameId,
        player: players[playerNumber]?.name || "",
        opponent: players[opponentNumber]?.name || "",
        playerValues: players[playerNumber]?.values || Array(9).fill(0),
        opponentValues: players[opponentNumber]?.values || Array(9).fill(0),
      });
      dispatch({ type: "placeDie", payload: { playerNumber, position } });
      dispatch({ type: "addRound" });
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" px={8}>
      <SimpleGrid columns={3} row={3} spacing={4}>
        {players[playerNumber]?.values.map((value, index) => (
          <Die
            key={crypto.randomUUID()}
            value={value}
            onClick={() => onClickHandler(index)}
            isClickable={!!players[playerNumber]?.valueToPlace}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
