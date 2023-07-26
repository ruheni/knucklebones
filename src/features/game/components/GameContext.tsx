import * as React from "react";
import type { Player, PlayerNumber } from "~/features/game/types";
import type { GameFormValues } from "~/features/game/components/GameForm";
import { cloneDeep } from "lodash";

type Action =
    { type: "startGame";
      payload: GameFormValues & { gameId: string }; } |
    { type: "addRound" } |
    { type: "quitGame" } |
    { type: "rollDie";
      payload: { playerNumber: PlayerNumber }; } |
    { type: "placeDie";
      payload: {
        playerNumber: PlayerNumber;
        calculatedPlayerValues: number[];
        calculatedOpponentValues: number[];
      };
    };
type Dispatch = (action: Action) => void;
type State = { players: Player[]; round: number; gameId: string };
type GameProviderProps = { children: React.ReactNode };

const GameContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
} | undefined>(undefined);

const INITIAL_STATE: State = {
  players: [],
  round: 0,
  gameId: "",
};

function gameReducer(state: State, action: Action) {
  switch (action.type) {
    case "startGame": {
      return {
        ...state,
        players: [
          {
            name: action.payload.playerOne,
            // values: [2, 2, 2, 2, 2, 2, 2, 2, 0],
            values: Array(9).fill(0),
            valueToPlace: 0,
          },
          {
            name: action.payload.playerTwo,
            // values: [3, 3, 3, 3, 3, 3, 3, 3, 0],
            values: Array(9).fill(0),
            valueToPlace: 0,
          },
        ],
        gameId: action.payload.gameId,
      };
    }
    case "addRound": {
      return { ...state, round: state.round + 1 };
    }
    case "quitGame": {
      return INITIAL_STATE;
    }
    case "rollDie": {
      const newValue = Math.floor(Math.random() * 6) + 1;
      // const newValue = 4;
      const { playerNumber } = action.payload;
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index === playerNumber) {
            return { ...cloneDeep(player), valueToPlace: newValue };
          }
          return player;
        }),
      };
    }
    case "placeDie": {
      const {
        playerNumber, calculatedPlayerValues, calculatedOpponentValues,
      } = action.payload;
      const opponentPlayerNumber: PlayerNumber = playerNumber === 0 ? 1 : 0;

      const activePlayer = {
        ...state.players[playerNumber] as Player,
        values: calculatedPlayerValues,
        valueToPlace: 0,
      };

      const opponentPlayer = {
        ...state.players[opponentPlayerNumber] as Player,
        values: calculatedOpponentValues,
      };

      return {
        ...state,
        players: playerNumber === 0
          ? [activePlayer, opponentPlayer]
          : [opponentPlayer, activePlayer],
      };
    }
    default: {
      return state;
    }
  }
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = React.useReducer(
    gameReducer,
    INITIAL_STATE,
  );
  const value = React.useMemo(() => ({ state, dispatch }), [state]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

function useGame() {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

export { GameProvider, useGame };
