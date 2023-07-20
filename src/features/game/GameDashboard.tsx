import {Button, Divider, Stack} from "@chakra-ui/react";
import {type Players} from "~/pages";
import {PlayerDashboard} from "~/features/game/PlayerDashboard";

interface Props {
    players: Players;
    onQuit: () => void;
}
export const GameDashboard = ({onQuit, players}: Props) => {
    return (
        <Stack>
            <Button onClick={onQuit} alignSelf="start">Quit game</Button>
            <PlayerDashboard name={players.playerOne} score={10} values={[1,2,3,4,5,6,1,2,3]} />
            <Divider />
            <PlayerDashboard name={players.playerTwo} score={20} values={[0,0,0,0,0,0,0,0,0]} position="right"/>
        </Stack>
    );
}
