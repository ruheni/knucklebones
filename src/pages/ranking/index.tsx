import {
  Heading, Stack,
} from "@chakra-ui/react";
import * as React from "react";
import Head from "next/head";

const Ranking = () => (
  <>
    <Head>
      <title>Ranking</title>
      <meta name="description" content="Ranking" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Stack spacing={16}>
      <Heading alignSelf="center">Ranking</Heading>

    </Stack>
  </>
);

export default Ranking;
