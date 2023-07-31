type Props = {
  delta: number | null;
  winner: string | null;
  playerName: string;
};

export const calculateSingleGameScore = ({ delta = 0, winner = "", playerName }: Props) => {
  if (winner === playerName && delta !== null) {
    return (delta * 10) + 10;
  }
  return 10;
};
