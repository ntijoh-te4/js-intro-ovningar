import { describe, it, expect } from "vitest";
import { largest } from "./largest.js";

describe("largest", () => {
  it("när det största är först", () => {
    expect(largest(9, 2, 5)).toBe(9);
  });

  it("när det största är i mitten", () => {
    expect(largest(2, 9, 5)).toBe(9);
  });

  it("när det största är sist", () => {
    expect(largest(2, 5, 9)).toBe(9);
  });

  it("när alla är lika", () => {
    expect(largest(4, 4, 4)).toBe(4);
  });
});
