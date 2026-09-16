import { describe, it, expect } from "vitest";
import { doubled } from "./doubled.js";

describe("doubled", () => {
  it("tom array", () => {
    expect(doubled([])).toEqual([]);
  });

  it("flera element", () => {
    expect(doubled([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it("ändrar inte originalet", () => {
    const original = [1, 2];
    doubled(original);
    expect(original).toEqual([1, 2]);
  });
});
