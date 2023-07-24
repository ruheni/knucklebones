import * as React from "react";
import {
  Box,
  Button, chakra,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PlayerBoard } from "~/features/game/PlayerBoard";
import { useGameOver } from "~/features/game/hooks/useGameOver";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  onQuit: () => void;
}

export const GameBoard = ({ onQuit }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isGameOver, winnerName } = useGameOver();

  React.useEffect(() => {
    if (isGameOver) {
      onOpen();
    }
  }, [isGameOver, onOpen]);

  return (
    <>
      <Stack direction="column" spacing={12}>
        <Button onClick={onQuit} alignSelf="center" colorScheme={isGameOver ? "primary" : "default"}>Quit game</Button>
        <Stack direction="column" spacing={4} alignItems="center">
          <PlayerBoard
            playerNumber={0}
          />
          <Divider />
          <PlayerBoard
            playerNumber={1}
          />
        </Stack>
      </Stack>
      <AnimatePresence>
        {isOpen && (
        <Box
          key="modal"
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
          exit={{ opacity: 0 }}
        >
          <Modal
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Game over</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold">
                  {`${winnerName} wins!`}
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="primary" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        )}
      </AnimatePresence>
    </>
  );
};
