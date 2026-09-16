import { describe, it, expect } from "vitest";
import { countChar } from "./count-char.js";

describe("countChar", () => {
  it("tom sträng", () => {
    expect(countChar("", "a")).toBe(0);
  });

  it("förekommer inte", () => {
    expect(countChar("hej", "a")).toBe(0);
  });

  it("förekommer flera gånger", () => {
    expect(countChar("banan", "a")).toBe(2);
  });

  it("skiljer på stora och små bokstäver", () => {
    expect(countChar("Anna", "a")).toBe(1);
  });
});
