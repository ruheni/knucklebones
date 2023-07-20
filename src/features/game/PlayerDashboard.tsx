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

export const PlayerDashboard = ({name, values, round, position = "left"}: Props) => (
    <Flex justifyContent="center" alignItems="center">
        <Flex direction="column" width="300px" maxWidth="300px" gap={2}>
            {position === "left" && (
                <>
                    <Heading>{name}</Heading>
                    <Text>Score: calculate total score</Text>
                    <Button
                        isDisabled={round % 2 === 1}
                        colorScheme="primary"
                        alignSelf="start">Roll the dice</Button>
                </>
            )}
        </Flex>
        <Flex direction={position === "left" ? "column-reverse" : "column"}>
            <PartialScore values={values} />
            <DiceBoard values={values} name={name} />
        </Flex>
        <Flex direction="column" width="300px" maxWidth="300px" gap={2}>
            { position === "right" && (
                <>
                    <Heading>{name}</Heading>
                    <Text>Score: calculate total score</Text>
                    <Button
                        isDisabled={round % 2 === 0}
                        colorScheme="primary"
                        alignSelf="start">Roll the dice</Button>
                </>
            )}
        </Flex>
    </Flex>
);
