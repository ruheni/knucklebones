import * as React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Die } from "~/features/game/Die";
import { useGame } from "~/features/game/GameContext";
import { api } from "~/utils/api";
import { calculateOpponentUpdatedValues, calculatePlayerUpdatedValues } from "~/features/game/utils";

interface Props {
  playerNumber: number;
}

export const DiceBoard = ({ playerNumber }: Props) => {
  const { state: { players, gameId }, dispatch } = useGame();
  const addMove = api.game.addMove.useMutation();

  const onClickHandler = React.useCallback((position: number) => {
    if (players[playerNumber]?.valueToPlace) {
      const opponentPlayerNumber = playerNumber === 0 ? 1 : 0;
      const calculatedPlayerValues = calculatePlayerUpdatedValues({
        playerValues: players[playerNumber]?.values || Array(9).fill(0),
        valueToPlace: players[playerNumber]?.valueToPlace || 0,
        position,
      });
      const calculatedOpponentValues = calculateOpponentUpdatedValues({
        opponentValues: players[opponentPlayerNumber]?.values || Array(9).fill(0),
        valueToPlace: players[playerNumber]?.valueToPlace || 0,
        position,
      });
      dispatch({
        type: "placeDie",
        payload: {
          playerNumber, calculatedPlayerValues, calculatedOpponentValues,
        },
      });
      dispatch({ type: "addRound" });
      addMove.mutate({
        gameId,
        player: players[playerNumber]?.name || "",
        opponent: players[opponentPlayerNumber]?.name || "",
        playerValues: calculatedPlayerValues,
        opponentValues: calculatedOpponentValues,
      });
    }
  }, [addMove, dispatch, gameId, playerNumber, players]);

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
