import * as React from "react";
import type { Player } from "~/features/game/types";
import type { GameFormValues } from "~/features/game/GameForm";

type Action = { type: "addPlayers"; payload: GameFormValues } | { type: "positionDie" } | { type: "quitGame" } | { type: "addRound" };
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
          { name: action.payload.playerOne, values: Array.from({ length: 9 }, () => 0) },
          { name: action.payload.playerTwo, values: Array.from({ length: 9 }, () => 0) },
        ],
      };
    }
    case "addRound": {
      return { ...state, round: state.round + 1 };
    }
    case "quitGame": {
      return INITIAL_STATE;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
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
