import { calculateAverage } from "./Result";

test("Should calculate average correctly", () => {
  let participants = [
    {
      name: "",
      money: 3
    },
    {
      name: "",
      money: 4
    },
    {
      name: "",
      money: 5
    }
  ];

  expect(calculateAverage(participants)).toBe(4);
});
