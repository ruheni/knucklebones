type Props = {
  delta: number;
  games: number | undefined;
};

export const calculateTotalPlayerScore = ({
  delta = 0,
  games = 0,
}: Props) => (delta * 10) + ((games) * 10);
