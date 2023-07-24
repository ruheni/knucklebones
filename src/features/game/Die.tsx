import { Flex } from "@chakra-ui/react";

type Props = {
  value: number;
  onClick: () => void;
  isClickable: boolean;
};
export const Die = ({ value, onClick, isClickable }: Props) => (
  <Flex
    width="50px"
    height="50px"
    bg="primary.100"
    alignItems="center"
    justifyContent="center"
    borderRadius="md"
    onClick={onClick}
    cursor={value === 0 && isClickable ? "grab" : "not-allowed"}
  >
    {value > 0 ? value : null}
  </Flex>
);
