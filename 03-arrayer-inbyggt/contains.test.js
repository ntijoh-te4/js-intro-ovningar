import { describe, it, expect } from "vitest";
import { contains } from "./contains.js";

describe("contains", () => {
  it("tom array innehåller inget", () => {
    expect(contains([], 1)).toBe(false);
  });

  it("finns först", () => {
    expect(contains([1, 2, 3], 1)).toBe(true);
  });

  it("finns sist", () => {
    expect(contains([1, 2, 3], 3)).toBe(true);
  });

  it("finns inte", () => {
    expect(contains([1, 2, 3], 4)).toBe(false);
  });

  it("jämför med ===, så '1' är inte 1", () => {
    expect(contains([1, 2, 3], "1")).toBe(false);
  });
});
