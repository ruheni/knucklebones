import {Heading, Text, Flex, Button} from "@chakra-ui/react";
import React from "react";
import {DiceBoard} from "~/features/game/DiceBoard";
import {PartialScore} from "~/features/game/PartialScore";

interface Props {
    name: string;
    values: number[];
    round: number;
    position?: "left" | "right";
}

interface PlayerInfosProps {
    name: string;
    round: number;
    showDetails: boolean;
    remainder: number;
}

const PlayerInfos = ({name, round, showDetails, remainder}: PlayerInfosProps) => (
    <Flex direction="column" width="300px" maxWidth="300px" gap={2}>
        {showDetails && (
            <>
                <Heading>{name}</Heading>
                <Text>Score: calculate total score</Text>
                <Button
                    isDisabled={round % 2 === remainder}
                    colorScheme="primary"
                    alignSelf="start">Roll the dice
                </Button>
            </>
        )}
    </Flex>
);

export const PlayerDashboard = ({name, values, round, position = "left"}: Props) => (
    <Flex justifyContent="center" alignItems="center">
        <PlayerInfos name={name} round={round} showDetails={position === "left"} remainder={1} />
        <Flex direction={position === "left" ? "column-reverse" : "column"}>
            <PartialScore values={values} />
            <DiceBoard values={values} name={name} />
        </Flex>
        <PlayerInfos name={name} round={round} showDetails={position === "right"} remainder={0} />
    </Flex>
);
