import { add, subtract } from "./math";

test("add: 2 + 3 should equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract: 5 - 3 should equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});
