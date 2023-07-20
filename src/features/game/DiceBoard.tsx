import { Flex, SimpleGrid} from "@chakra-ui/react";
import {Die} from "~/features/game/Die";

interface Props {
    values: number[];
    name: string;
}

export const DiceBoard = ({values, name}: Props) => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"} px={8}>
            <SimpleGrid columns={3} row={3} spacing={4}>
                {values.map((value, index) => (
                    <Die key={`${name}-${index}`} value={value} />
                ))}
            </SimpleGrid>
        </Flex>)
}
