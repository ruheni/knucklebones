const getColumnByIndex = (index: number) => index % 3;

type CalculatePlayerUpdatedValuesProps = {
  playerValues: number[];
  valueToPlace: number;
  position: number;
};
export const calculatePlayerUpdatedValues = ({
  playerValues,
  valueToPlace,
  position,
}: CalculatePlayerUpdatedValuesProps) => [
  ...playerValues.slice(0, position),
  valueToPlace,
  ...playerValues.slice(position + 1),
];

type CalculateOpponentUpdatedValuesProps = {
  opponentValues: number[];
  valueToPlace: number;
  position: number;
};
export const calculateOpponentUpdatedValues = ({
  opponentValues,
  valueToPlace,
  position,
}: CalculateOpponentUpdatedValuesProps) => [
  ...opponentValues.map((value, i) => {
    if (getColumnByIndex(i) === getColumnByIndex(position)) {
      return (value === valueToPlace ? 0 : value);
    }
    return value;
  }),
];
