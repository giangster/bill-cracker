import { calculateShare, calculateAverage } from "./Result";

describe("Calculate average tests", () => {
  test("Should calculate average correctly", () => {
    let participants = [
      {
        participantName: "",
        money: 3
      },
      {
        participantName: "",
        money: 4
      },
      {
        participantName: "",
        money: 5
      }
    ];
    expect(calculateAverage(participants)).toBe(4);
  });

  test("Should return NaN", () => {
    let participants = [
      {
        participantName: "",
        money: 3
      },
      {
        participantName: "",
        money: "abc"
      }
    ];

    expect(calculateAverage(participants)).toBeNaN();
  });
});

describe("Calculate share tests", () => {
  test("Should calculate share accurately", () => {
    let participants = [
      {
        participantName: "Dog",
        money: 3
      },
      {
        participantName: "Cat",
        money: 4
      },
      {
        participantName: "Duck",
        money: 5
      }
    ];

    expect(calculateShare(participants)).toStrictEqual([
      "Dog owes Duck 1.00 euros.",
      "Cat owes Duck 0.00 euros."
    ]);
  });
});
