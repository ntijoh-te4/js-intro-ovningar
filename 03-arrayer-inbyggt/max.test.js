import { describe, it, expect } from "vitest";
import { max } from "./max.js";

describe("max", () => {
  it("ett element", () => {
    expect(max([4])).toBe(4);
  });

  it("flera element", () => {
    expect(max([3, 9, 2])).toBe(9);
  });

  it("negativa tal", () => {
    expect(max([-3, -9, -2])).toBe(-2);
  });
});
