import * as React from "react";
import {
  Box, Button, Flex, Heading, Input, Stack,
} from "@chakra-ui/react";
import {
  ErrorMessage, Field, Form, Formik,
} from "formik";
import * as yup from "yup";
import { FiArrowRight } from "react-icons/fi";

export type GameFormValues = {
  playerOne: string;
  playerTwo: string;
};

type Props = {
  onSubmit: (values: GameFormValues) => void;
  initialValues: GameFormValues;
};

const validationSchema = () => yup.object().shape({
  playerOne: yup.string().required("Player 1 is required").min(3, "Player 1 must be at least 3 characters"),
  playerTwo: yup.string().required("Player 2 is required").min(3, "Player 2 must be at least 3 characters"),
});

export const GameForm = ({ onSubmit, initialValues }: Props) => (
  <Stack direction="column" alignItems="center" spacing={16}>
    <Heading>Knucklebones</Heading>
    <Flex p={4} borderWidth="1px" borderRadius="lg" alignItems="center" bg="orange.50">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {({ isValid }) => (
          <Form>
            <Flex direction={["column", "row"]} gap={4} alignItems="center" justifyContent="space-between">
              <Flex direction="column" gap={4}>
                <Box width={["xs", "md"]} height="64px">
                  <Field as={Input} type="text" name="playerOne" placeholder="Player 1" />
                  <ErrorMessage component="div" name="playerOne" />
                </Box>
                <Box width={["xs", "md"]} height="64px">
                  <Field as={Input} type="text" name="playerTwo" placeholder="Player 2" />
                  <ErrorMessage component="div" name="playerTwo" />
                </Box>
              </Flex>
              <Box
                as={Button}
                type="submit"
                colorScheme="primary"
                isDisabled={!isValid}
                h="100px"
                w="100px"
                borderRadius="100px"
                rightIcon={<FiArrowRight />}
              >
                Start
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  </Stack>
);
