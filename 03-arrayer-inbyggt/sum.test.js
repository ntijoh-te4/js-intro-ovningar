import { describe, it, expect } from "vitest";
import { sum } from "./sum.js";

describe("sum", () => {
  it("tom array är 0", () => {
    expect(sum([])).toBe(0);
  });

  it("ett element", () => {
    expect(sum([5])).toBe(5);
  });

  it("flera element", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("negativa tal", () => {
    expect(sum([10, -4])).toBe(6);
  });
});
