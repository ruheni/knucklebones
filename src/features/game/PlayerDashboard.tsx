import {Heading, Text, Flex} from "@chakra-ui/react";
import React from "react";
import {DiceBoard} from "~/features/game/DiceBoard";
import {PartialScore} from "~/features/game/PartialScore";

interface Props {
    name: string;
    position?: "left" | "right";
    values: number[];
}

export const PlayerDashboard = ({name, position = "left", values}: Props) => (
    <Flex justifyContent="center" alignItems="center">
        <Flex direction="column" width="300px" maxWidth="300px">
            {position === "left" && (
                <>
                    <Heading>{name}</Heading>
                    <Text>Score: calculate total score</Text>
                </>
            )}
        </Flex>
        <Flex direction={position === "left" ? "column-reverse" : "column"}>
            <PartialScore values={values} />
            <DiceBoard values={values} />
        </Flex>
        <Flex direction="column" width="300px" maxWidth="300px">
            { position === "right" && (
                <>
                    <Heading>{name}</Heading>
                    <Text>Score: calculate total score</Text>
                </>
            )}
        </Flex>
    </Flex>
);
