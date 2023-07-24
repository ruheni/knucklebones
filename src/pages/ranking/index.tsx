import {
  Heading, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr,
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
            <Tr>
              <Td>1</Td>
              <Td>Noa</Td>
              <Td isNumeric>140</Td>
              <Td textAlign="end">History</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Teo</Td>
              <Td isNumeric>130</Td>
              <Td textAlign="end">History</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  </>
);

export default Ranking;
