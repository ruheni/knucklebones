import {Button, Flex} from "@chakra-ui/react";
import Link from 'next/link'

export const Menu = () => {
    return (
        <Flex w="100%" justifyContent="space-between">
            <Link href="/play">
                <Button
                    colorScheme="primary"
                    variant="ghost">
                    Play
                </Button>
            </Link>
            <Link href="/how-to-play">
                <Button
                    colorScheme="primary"
                    variant="ghost">
                    How to play
                </Button>
            </Link>
            <Link href="/ranking">
                <Button
                    colorScheme="primary"
                    variant="ghost">
                    Ranking
                </Button>
            </Link>
        </Flex>
    )
}
