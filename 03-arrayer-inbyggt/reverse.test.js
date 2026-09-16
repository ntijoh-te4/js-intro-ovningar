import { describe, it, expect } from "vitest";
import { reverse } from "./reverse.js";

describe("reverse", () => {
  it("tom array", () => {
    expect(reverse([])).toEqual([]);
  });

  it("ett element", () => {
    expect(reverse([1337])).toEqual([1337]);
  });

  it("flera element", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("ändrar inte originalet", () => {
    const original = [1, 2, 3];
    reverse(original);
    expect(original).toEqual([1, 2, 3]);
  });
});
