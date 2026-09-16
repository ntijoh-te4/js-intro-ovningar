import { describe, it, expect } from "vitest";
import { smallest } from "./smallest.js";

describe("smallest", () => {
  it("när det minsta är först", () => {
    expect(smallest(1, 2)).toBe(1);
  });

  it("när det minsta är sist", () => {
    expect(smallest(3, 2)).toBe(2);
  });

  it("när de är lika", () => {
    expect(smallest(1337, 1337)).toBe(1337);
  });

  it("med negativa tal", () => {
    expect(smallest(-5, 3)).toBe(-5);
  });
});
