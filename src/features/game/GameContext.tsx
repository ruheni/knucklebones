import * as React from "react";
import type { Player } from "~/features/game/types";
import type { GameFormValues } from "~/features/game/GameForm";
import { cloneDeep } from "lodash";

type Action =
    { type: "addPlayers"; payload: GameFormValues } |
    { type: "addRound" } |
    { type: "quitGame" } |
    { type: "rollDie"; payload: { playerNumber: number } } |
    { type: "placeDie"; payload: { playerNumber: number; position: number } };
type Dispatch = (action: Action) => void;
type State = { players: Player[]; round: number };
type GameProviderProps = { children: React.ReactNode };

const GameContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
} | undefined>(undefined);

const INITIAL_STATE: State = {
  players: [],
  round: 0,
};

function gameReducer(state: State, action: Action) {
  switch (action.type) {
    case "addPlayers": {
      return {
        ...state,
        players: [
          {
            name: action.payload.playerOne,
            values: Array.from({ length: 9 }, () => 0),
            valueToPlace: 0,
          },
          {
            name: action.payload.playerTwo,
            values: Array.from({ length: 9 }, () => 0),
            valueToPlace: 0,
          },
        ],
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
      const { playerNumber, position } = action.payload;
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index === playerNumber) {
            return {
              ...cloneDeep(player),
              values: [
                ...player.values.slice(0, position),
                player.valueToPlace,
                ...player.values.slice(position + 1),
              ],
              valueToPlace: 0,
            };
          }
          return player;
        }),
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
