import { describe, it, expect } from "vitest";
import { isPalindrome } from "./is-palindrome.js";

describe("isPalindrome", () => {
  it("ett tecken", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("palindrom", () => {
    expect(isPalindrome("dallassallad")).toBe(true);
  });

  it("inte palindrom", () => {
    expect(isPalindrome("hej")).toBe(false);
  });

  it("struntar i stora och små bokstäver", () => {
    expect(isPalindrome("Anna")).toBe(true);
  });
});
