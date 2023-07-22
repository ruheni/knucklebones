import {
  Button, Flex, Heading, HStack, Text,
} from "@chakra-ui/react";
import React from "react";
import type { PlayerNumber } from "~/features/game/types";
import { useGame } from "~/features/game/GameContext";

type Props = {
  playerNumber: PlayerNumber;
  dieValue: number | undefined;
  onRollDieHandler: () => void;
};

export const PlayerInfos = ({
  playerNumber, dieValue, onRollDieHandler,
}: Props) => {
  const { state: { players, round } } = useGame();
  const remainder = playerNumber === 0 ? 1 : 0;

  return (
    <Flex direction="column" width="400px" gap={2}>
      <Heading>{players[playerNumber]?.name}</Heading>
      <Text>Score: calculate total score</Text>
      <Button
        isDisabled={round % 2 === remainder || dieValue !== undefined}
        colorScheme="primary"
        alignSelf="start"
        onClick={onRollDieHandler}
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
          {dieValue}
        </Flex>
      </HStack>
    </Flex>
  );
};
