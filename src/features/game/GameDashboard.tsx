import {Button, Divider, Stack} from "@chakra-ui/react";
import {type Players} from "~/pages";
import {PlayerDashboard} from "~/features/game/PlayerDashboard";

interface Props {
    players: Players;
    onQuit: () => void;
}
export const GameDashboard = ({onQuit, players}: Props) => {
    const {name: namePlayerOne, values: valuesPlayerOne} = players.playerOne;
    const {name: namePlayerTwo, values: valuesPlayerTwo} = players.playerTwo;
    return (
        <Stack>
            <Button onClick={onQuit} alignSelf="start">Quit game</Button>
            <PlayerDashboard
                name={namePlayerOne}
                values={valuesPlayerOne} />
            <Divider />
            <PlayerDashboard
                name={namePlayerTwo}
                values={valuesPlayerTwo}
                position="right"/>
        </Stack>
    );
}
