import { describe, it, expect } from "vitest";
import { isEmpty } from "./is-empty.js";

describe("isEmpty", () => {
  it("tom array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("ett element", () => {
    expect(isEmpty([0])).toBe(false);
  });
});
