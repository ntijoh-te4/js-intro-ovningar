import { describe, it, expect } from "vitest";
import { count } from "./count.js";

describe("count", () => {
  it("tom array", () => {
    expect(count([], 1)).toBe(0);
  });

  it("förekommer inte", () => {
    expect(count([1, 2, 3], 4)).toBe(0);
  });

  it("förekommer flera gånger", () => {
    expect(count([1, 2, 1, 3, 1], 1)).toBe(3);
  });
});
