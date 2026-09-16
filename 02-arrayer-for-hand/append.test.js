import { describe, it, expect } from "vitest";
import { append } from "./append.js";

describe("append", () => {
  it("på tom array", () => {
    expect(append([], 1)).toEqual([1]);
  });

  it("på array med element", () => {
    expect(append([1, 2], 3)).toEqual([1, 2, 3]);
  });

  it("ändrar inte originalet", () => {
    const original = [1, 2];
    append(original, 3);
    expect(original).toEqual([1, 2]);
  });
});
