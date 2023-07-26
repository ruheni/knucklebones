import * as React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Die } from "~/features/game/components/Die";
import { useGame } from "~/features/game/components/GameContext";
import { api } from "~/utils/api";
import { calculateTotalScore } from "~/features/game/utils/calculateTotalScore";
import { calculatePlayerUpdatedValues } from "~/features/game/utils/calculatePlayerUpdatedValues";
import { calculateOpponentUpdatedValues } from "~/features/game/utils/calculateOpponentUpdatedValues";

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
      const calculatedPlayerScore = calculateTotalScore({ values: calculatedPlayerValues });
      const calculatedOpponentValues = calculateOpponentUpdatedValues({
        opponentValues: players[opponentPlayerNumber]?.values || Array(9).fill(0),
        valueToPlace: players[playerNumber]?.valueToPlace || 0,
        position,
      });
      const calculatedOpponentScore = calculateTotalScore({ values: calculatedOpponentValues });
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
        playerScore: calculatedPlayerScore,
        opponentScore: calculatedOpponentScore,
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
