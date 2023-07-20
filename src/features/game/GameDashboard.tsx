import {Box, Button, Text, Stack} from "@chakra-ui/react";
import {type Players} from "~/pages";

interface Props {
    players: Players;
    onQuit: () => void;
}
export const GameDashboard = ({onQuit, players}: Props) => {
    return (
        <Stack bg={"red.100"}>
            <Button onClick={onQuit} alignSelf="start">Quit game</Button>
            <Text>Game dashboard</Text>
            <Box>{players.playerOne}</Box>
            <Box>{players.playerTwo}</Box>
        </Stack>
    );
}
