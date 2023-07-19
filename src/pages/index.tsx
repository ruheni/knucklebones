import Head from "next/head";
// import { api } from "~/utils/api";
import {Flex, Heading, Text} from "@chakra-ui/react";
import {Menu} from "~/features/home/Menu";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Knucklebones</title>
        <meta name="description" content="Knucklebones game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" direction="column" justifyContent="center" alignItems="center" gap={8} m={8}>
        <Menu />
        <Heading>Knucklebones</Heading>
        {/*<Text>*/}
        {/*  {hello.data ? hello.data.greeting : "Loading tRPC query..."}*/}
        {/*</Text>*/}
        {/*<AuthShowcase />*/}
      </Flex>
    </>
  );
}
