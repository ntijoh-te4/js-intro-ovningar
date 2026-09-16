import { describe, it, expect } from "vitest";
import { chomp } from "./chomp.js";

describe("chomp", () => {
  it("tar bort radbrytning i slutet", () => {
    expect(chomp("hej\n")).toBe("hej");
  });

  it("lämnar strängen utan radbrytning orörd", () => {
    expect(chomp("hej")).toBe("hej");
  });

  it("tar bara bort en radbrytning", () => {
    expect(chomp("hej\n\n")).toBe("hej\n");
  });

  it("rör inte radbrytningar i mitten", () => {
    expect(chomp("hej\ndå\n")).toBe("hej\ndå");
  });
});
