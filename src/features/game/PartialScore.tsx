import {Box, Flex} from "@chakra-ui/react";

interface Props {
    values: number[];
}

export const PartialScore = ({ values }: Props) => {
    return (
        <Flex gap={4} px={8}>
            <Flex
                width="50px"
                height="50px"
                alignItems="center"
                justifyContent="center"
            >10</Flex>
            <Flex
                width="50px"
                height="50px"
                alignItems="center"
                justifyContent="center"
            >10</Flex>
            <Flex
                width="50px"
                height="50px"
                alignItems="center"
                justifyContent="center"
            >10</Flex>
        </Flex>
    );
}
