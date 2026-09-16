import { describe, it, expect } from "vitest";
import { last } from "./last.js";

describe("last", () => {
  it("flera element", () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it("tom array ger undefined", () => {
    expect(last([])).toBe(undefined);
  });
});
