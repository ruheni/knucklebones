import {
  Heading, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr,
  Spinner,
} from "@chakra-ui/react";
import * as React from "react";
import Head from "next/head";
import { api } from "~/utils/api";
import NextLink from "next/link";

const Ranking = () => {
  const getRanking = api.game.getRanking.useQuery();

  if (getRanking.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Head>
        <title>Ranking</title>
        <meta name="description" content="Ranking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing={16}>
        <Heading alignSelf="center">Ranking</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Player</Th>
                <Th isNumeric>Score</Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {getRanking.data?.map(({ winner, _sum, _count }, index) => (
                <Tr key={crypto.randomUUID()}>
                  <Td>{`# ${index + 1}`}</Td>
                  <Td>{winner}</Td>
                  <Td isNumeric>
                    {(((_sum.delta || 0) * 10) + (_count.winner || 0) * 10)}
                  </Td>
                  <NextLink href={`/ranking/history/${encodeURIComponent(winner!)}`}>
                    <Td textAlign="end">History</Td>
                  </NextLink>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

export default Ranking;
