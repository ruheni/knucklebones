import {
  Button, Flex, Heading, HStack, Text,
} from "@chakra-ui/react";
import React from "react";
import type { PlayerNumber } from "~/features/game/types";
import { useGame } from "~/features/game/components/GameContext";
import { usePlayerTotalScore } from "~/features/game/hooks/usePlayerTotalScore";

type Props = {
  playerNumber: PlayerNumber;
};

export const PlayerConsole = ({
  playerNumber,
}: Props) => {
  const { state: { players, round }, dispatch } = useGame();
  const totalScore = usePlayerTotalScore({ playerNumber });
  const remainder = playerNumber === 0 ? 1 : 0;

  return (
    <Flex direction="column" width="400px" gap={2}>
      <Heading>{players[playerNumber]?.name}</Heading>
      <Text fontWeight="bold">
        {`Total score: ${totalScore}`}
      </Text>
      <Button
        isDisabled={
          round % 2 === remainder
            || players.some((player) => player.values.every((value) => value !== 0))
        }
        colorScheme="primary"
        alignSelf="start"
        onClick={() => dispatch({ type: "rollDie", payload: { playerNumber } })}
      >
        Roll the dice
      </Button>
      <HStack>
        <Text>Die to insert</Text>
        <Flex
          width="50px"
          height="50px"
          alignItems="center"
          justifyContent="center"
          borderWidth="1px"
          borderRadius="lg"
        >
          {(players[playerNumber]?.valueToPlace || 0) > 0 ? players[playerNumber]?.valueToPlace : "-"}
        </Flex>
      </HStack>
    </Flex>
  );
};
