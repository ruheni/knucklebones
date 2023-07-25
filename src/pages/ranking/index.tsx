import {
  Heading, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr,
} from "@chakra-ui/react";
import * as React from "react";
import Head from "next/head";
import { api } from "~/utils/api";

const Ranking = () => {
  const getRanking = api.game.getRanking.useQuery();
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
                    {((_sum.delta || 0) * 10)
                      + (10 * _count.player)
                      + (10 * _count.opponent)}
                  </Td>
                  <Td textAlign="end">History</Td>
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
