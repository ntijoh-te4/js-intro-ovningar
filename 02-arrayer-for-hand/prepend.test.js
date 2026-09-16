import { describe, it, expect } from "vitest";
import { prepend } from "./prepend.js";

describe("prepend", () => {
  it("på tom array", () => {
    expect(prepend([], 1)).toEqual([1]);
  });

  it("på array med element", () => {
    expect(prepend([2, 3], 1)).toEqual([1, 2, 3]);
  });

  it("ändrar inte originalet", () => {
    const original = [2, 3];
    prepend(original, 1);
    expect(original).toEqual([2, 3]);
  });
});
