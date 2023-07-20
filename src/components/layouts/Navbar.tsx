import {Flex} from "@chakra-ui/react";
import ActiveLink from "~/components/ActiveLink";

export default function Navbar() {
    return (
        <Flex w="100%" justifyContent="space-between" p={8}>
            <ActiveLink href="/">Play</ActiveLink>
            <ActiveLink href="/how-to-play">How to play</ActiveLink>
            <ActiveLink href="/ranking">Ranking</ActiveLink>
        </Flex>
    )
}
