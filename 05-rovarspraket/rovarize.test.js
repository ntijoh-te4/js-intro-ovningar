import { describe, it, expect } from "vitest";
import { rovarize } from "./rovarize.js";

describe("rovarize", () => {
  it("en konsonant", () => {
    expect(rovarize("k")).toBe("kok");
  });

  it("en vokal", () => {
    expect(rovarize("a")).toBe("a");
  });

  it("ett ord", () => {
    expect(rovarize("hej")).toBe("hohejoj");
  });

  it("stor bokstav", () => {
    expect(rovarize("Hej")).toBe("Hohejoj");
  });

  it("en mening", () => {
    expect(rovarize("Bajsar björnar i skogen?")).toBe(
      "Bobajojsosaror bobjojörornonaror i soskokogogenon?",
    );
  });
});
