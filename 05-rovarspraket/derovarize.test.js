import { describe, it, expect } from "vitest";
import { derovarize } from "./derovarize.js";

describe("derovarize", () => {
  it("en konsonant", () => {
    expect(derovarize("kok")).toBe("k");
  });

  it("en vokal", () => {
    expect(derovarize("a")).toBe("a");
  });

  it("ett ord", () => {
    expect(derovarize("hohejoj")).toBe("hej");
  });

  it("en mening", () => {
    expect(derovarize("Tothohisos isos a bobitot hoharordoderor")).toBe(
      "This is a bit harder",
    );
  });

  it("tillbaka till svenska", () => {
    expect(derovarize("Bobajojsosaror bobjojörornonaror i soskokogogenon?")).toBe(
      "Bajsar björnar i skogen?",
    );
  });
});
