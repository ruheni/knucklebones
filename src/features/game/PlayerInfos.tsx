import {
  Button, Flex, Heading, HStack, Text,
} from "@chakra-ui/react";
import React from "react";
import type { PlayerNumber } from "~/features/game/types";

type Props = {
  playerName: string;
  round: number;
  showDetails: boolean;
  dieValue: number | undefined;
  onRollDieHandler: (playerNumber: PlayerNumber) => void;
  playerNumber: PlayerNumber;
};

export const PlayerInfos = ({
  playerName, round, showDetails, dieValue, onRollDieHandler, playerNumber,
}: Props) => {
  const remainder = playerNumber === "one" ? 1 : 0;

  return (
    <Flex direction="column" width="300px" maxWidth="300px" gap={2}>
      {showDetails && (
        <>
          <Heading>{playerName}</Heading>
          <Text>Score: calculate total score</Text>
          <Button
            isDisabled={round % 2 === remainder || dieValue !== undefined}
            colorScheme="primary"
            alignSelf="start"
            onClick={() => onRollDieHandler(playerNumber)}
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
        </>
      )}
    </Flex>
  );
};
