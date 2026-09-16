import { describe, it, expect } from "vitest";
import { average } from "./average.js";

describe("average", () => {
  it("tom array är 0", () => {
    expect(average([])).toBe(0);
  });

  it("ett element", () => {
    expect(average([7])).toBe(7);
  });

  it("flera element", () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });
});
