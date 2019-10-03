import { calculateShare, calculateAverage } from "./Result";

describe("Result.js test suite", () => {
  let participants = [];
  beforeEach(() => {
    participants = [
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
  });
  describe("Calculate average tests", () => {
    test("Should calculate average correctly", () => {
      expect(calculateAverage(participants)).toBe(4);
    });

    test("Should return NaN", () => {
      participants[1].money = "abc";
      expect(calculateAverage(participants)).toBeNaN();
    });
  });

  describe("Calculate share tests", () => {
    beforeEach(() => {
      participants[0].participantName = "Dog";
      participants[1].participantName = "Cat";
      participants[2].participantName = "Duck";
    });
    //Divide a unit test into three smaller parts: establishment, execution, and assertion
    test("Should calculate share accurately", () => {
      participants[2].money = 8;

      let result = calculateShare(participants);

      expect(result).toStrictEqual([
        "Dog owes Duck 2.00 euros.",
        "Cat owes Duck 1.00 euros."
      ]);
    });

    test("Should calculate complex input accurately", () => {
      participants.push({ participantName: "Rabbit", money: 1520 });

      let result = calculateShare(participants);

      expect(result).toStrictEqual([
        "Dog owes Rabbit 380.00 euros.",
        "Cat owes Rabbit 379.00 euros.",
        "Duck owes Rabbit 378.00 euros."
      ]);
    });

    test("Should not print zero debt", () => {
      expect(calculateShare(participants)).toStrictEqual([
        "Dog owes Duck 1.00 euros."
      ]);
    });
  });
});
