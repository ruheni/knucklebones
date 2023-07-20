import {Flex, Link} from "@chakra-ui/react";
import NextLink from "next/link";

export const Menu = () => {
    return (
        <Flex w="100%" justifyContent="space-between">
            <Link as={NextLink} href="/">
                Play
            </Link>
            <Link as={NextLink} href="/how-to-play">
                How to play
            </Link>
            <Link as={NextLink} href="/ranking">
                Ranking
            </Link>
        </Flex>
    )
}
