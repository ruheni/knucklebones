import { calculateTotalPlayerScore } from "~/features/ranking/utils/calculateTotalPlayerScore";

describe("calculateTotalPlayerScore", () => {
  it("should return the correct total player score, when Teo played 5 games with a total delta of 15", () => {
    const result = calculateTotalPlayerScore({
      delta: 15,
      games: 5,
    });
    expect(result).toMatchSnapshot();
  });
  it("should return the correct total player score, when Teo loses all the games he played", () => {
    const result = calculateTotalPlayerScore({
      delta: 0,
      games: 5,
    });
    expect(result).toMatchSnapshot();
  });
});
