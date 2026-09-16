import { describe, it, expect } from "vitest";
import { concat } from "./concat.js";

describe("concat", () => {
  it("två tomma", () => {
    expect(concat([], [])).toEqual([]);
  });

  it("tom plus något", () => {
    expect(concat([], [1, 2])).toEqual([1, 2]);
  });

  it("något plus tom", () => {
    expect(concat([1, 2], [])).toEqual([1, 2]);
  });

  it("två med element", () => {
    expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("ändrar inte originalen", () => {
    const a = [1];
    const b = [2];
    concat(a, b);
    expect(a).toEqual([1]);
    expect(b).toEqual([2]);
  });
});
