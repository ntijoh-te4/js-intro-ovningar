import { describe, it, expect } from "vitest";
import { words } from "./words.js";

describe("words", () => {
  it("ett ord", () => {
    expect(words("hej")).toEqual(["hej"]);
  });

  it("flera ord", () => {
    expect(words("hej på dig")).toEqual(["hej", "på", "dig"]);
  });

  it("flera mellanslag i rad", () => {
    expect(words("hej   på  dig")).toEqual(["hej", "på", "dig"]);
  });

  it("mellanslag i början och slutet", () => {
    expect(words("  hej ")).toEqual(["hej"]);
  });

  it("tom sträng ger tom array", () => {
    expect(words("")).toEqual([]);
  });
});
