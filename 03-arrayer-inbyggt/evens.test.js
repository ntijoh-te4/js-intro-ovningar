import { describe, it, expect } from "vitest";
import { evens } from "./evens.js";

describe("evens", () => {
  it("tom array", () => {
    expect(evens([])).toEqual([]);
  });

  it("blandat", () => {
    expect(evens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it("inga jämna", () => {
    expect(evens([1, 3, 5])).toEqual([]);
  });

  it("noll är jämnt", () => {
    expect(evens([0])).toEqual([0]);
  });
});
