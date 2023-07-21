import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Die } from "~/features/game/Die";

interface Props {
  values: number[];
  name: string;
}

export const DiceBoard = ({ values, name }: Props) => (
  <Flex justifyContent="center" alignItems="center" px={8}>
    <SimpleGrid columns={3} row={3} spacing={4}>
      {values.map((value, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Die key={`${name}-${index}`} value={value} />
      ))}
    </SimpleGrid>
  </Flex>
);
