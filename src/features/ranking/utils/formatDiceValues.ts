export const formatDiceValues = (values: string) => {
  const valuesArray = values.split(",");
  return valuesArray.map((e, i) => {
    if ((i + 1) % 3) {
      return `${e},`;
    }
    if (i + 1 === valuesArray.length) {
      return e;
    }
    return `${e}|`;
  }).join("");
};
