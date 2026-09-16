import { describe, it, expect } from "vitest";
import { ticketPrice } from "./ticket-price.js";

describe("ticketPrice", () => {
  it("barn betalar 10", () => {
    expect(ticketPrice(7)).toBe(10);
  });

  it("17 är fortfarande barn", () => {
    expect(ticketPrice(17)).toBe(10);
  });

  it("18 betalar fullt pris", () => {
    expect(ticketPrice(18)).toBe(20);
  });

  it("64 betalar fullt pris", () => {
    expect(ticketPrice(64)).toBe(20);
  });

  it("65 är pensionär", () => {
    expect(ticketPrice(65)).toBe(15);
  });
});
