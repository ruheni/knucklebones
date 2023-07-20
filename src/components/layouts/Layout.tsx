import Navbar from "./Navbar";
import Footer from "./Footer";
import {Box, Flex} from "@chakra-ui/react";
import * as React from "react";
import {FOOTER_HEIGHT, NAVBAR_HEIGHT, PAGE_WIDTH} from "~/constants/layout";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <Flex
                direction="column"
                alignItems="center"
                py="32px"
                minHeight={`calc(100vh - ${NAVBAR_HEIGHT}px - ${FOOTER_HEIGHT}px)`}
            >
                <Box width={PAGE_WIDTH}>{children}</Box>
            </Flex>
            <Footer />
        </>
    )
}
