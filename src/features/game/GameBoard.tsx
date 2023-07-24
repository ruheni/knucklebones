import * as React from "react";
import {
  Button,
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

  const onCloseHandler = () => {
    onClose();
    onQuit();
  };

  return (
    <>
      <Stack direction="column" spacing={12}>
        <Button onClick={onQuit} alignSelf="start">Quit game</Button>
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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onCloseHandler}>
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
              <Button colorScheme="primary" mr={3} onClick={onCloseHandler}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
