import Head from "next/head";
// import { api } from "~/utils/api";
import {Button, Flex, Heading, Input} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Knucklebones</title>
        <meta name="description" content="Knucklebones game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" alignItems="center" gap={8} m={8}>
        <Heading>Knucklebones</Heading>
          <Flex gap={4} alignItems="center" w="50%" justifyContent="space-between">
              <Flex direction="column" gap={2} flex={1}>
                  <Input maxW="250px" placeholder="Player 1" />
                  <Input maxW="250px" placeholder="Player 2" />
              </Flex>
              <NextLink href="/game">
                  <Button
                      colorScheme="primary"
                      size="lg"
                      borderRadius={8}>Start</Button>
              </NextLink>
          </Flex>
        {/*<Text>*/}
        {/*  {hello.data ? hello.data.greeting : "Loading tRPC query..."}*/}
        {/*</Text>*/}
        {/*<AuthShowcase />*/}
      </Flex>
    </>
  );
}
