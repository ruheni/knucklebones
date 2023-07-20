import Head from "next/head";
// import { api } from "~/utils/api";
import {Flex, Heading} from "@chakra-ui/react";

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
        {/*<Text>*/}
        {/*  {hello.data ? hello.data.greeting : "Loading tRPC query..."}*/}
        {/*</Text>*/}
        {/*<AuthShowcase />*/}
      </Flex>
    </>
  );
}
