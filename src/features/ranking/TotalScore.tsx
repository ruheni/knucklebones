import * as React from "react";
import { api } from "~/utils/api";

type Props = {
  playerName: string;
  delta: number;
};
export const TotalScore = ({ playerName, delta }: Props) => {
  const getGames = api.game.getGamesByPlayer.useQuery({ playerName });
  return (
    <div>
      <p>{(delta * 10) + (((getGames.data?.length) || 0) * 10)}</p>
    </div>
  );
};
