export type PlayerNumber = "one" | "two";
export type Player = {
  name: string;
  values: number[];
};

export type Players = {
  playerOne: Player;
  playerTwo: Player;
};
