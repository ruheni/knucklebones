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
