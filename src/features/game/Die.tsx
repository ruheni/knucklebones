import { Flex } from "@chakra-ui/react";

type Props = {
  value: number;
  onClick: () => void;
};
export const Die = ({ value, onClick }: Props) => (
  <Flex
    width="50px"
    height="50px"
    bg="primary.100"
    alignItems="center"
    justifyContent="center"
    borderRadius="md"
    onClick={onClick}
    cursor={value > 0 ? "default" : "pointer"}
  >
    {value > 0 ? value : null}
  </Flex>
);
