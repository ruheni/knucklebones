const getColumnByIndex = (index: number) => index % 3;

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
