import { describe, it, expect } from "vitest";
import { first } from "./first.js";

describe("first", () => {
  it("ett element", () => {
    expect(first([42])).toBe(42);
  });

  it("flera element", () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  it("tom array ger undefined", () => {
    expect(first([])).toBe(undefined);
  });
});
