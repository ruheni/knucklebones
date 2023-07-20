import {Button, Stack} from "@chakra-ui/react";
import {type Players} from "~/pages";
import {PlayerDashboard} from "~/features/game/PlayerDashboard";

interface Props {
    players: Players;
    onQuit: () => void;
}
export const GameDashboard = ({onQuit, players}: Props) => {
    return (
        <Stack bg={"red.100"}>
            <Button onClick={onQuit} alignSelf="start">Quit game</Button>
            <PlayerDashboard name={players.playerOne}/>
            <PlayerDashboard name={players.playerTwo}/>
        </Stack>
    );
}
