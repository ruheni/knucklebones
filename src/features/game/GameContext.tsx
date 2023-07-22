import * as React from "react";
import type { Player } from "~/features/game/types";

type Action = { type: "addPlayer" } | { type: "positionDie" } | { type: "reset" } | { type: "rollDie" } | { type: "addRound" };
type Dispatch = (action: Action) => void;
type State = { players: Player[]; round: number };
type GameProviderProps = { children: React.ReactNode };

const GameContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
} | undefined>(undefined);

function gameReducer(state: State, action: Action) {
  switch (action.type) {
    case "addRound": {
      return { ...state, round: state.round + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = React.useReducer(gameReducer, { players: [], round: 0 });
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
