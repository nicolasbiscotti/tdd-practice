import { expect } from "chai";
import { mostFrequently } from "./mostfrequently.mjs";

describe("most frequently test", function () {
  it("should return nothing here when the list is empty", () => {
    const emptyList = [];
    expect(mostFrequently(emptyList)).to.equal("nothing here");
  });

  it("should return Nicolás Biscotti for oneEntry", () => {
    const oneEntry = ["Nicolás Biscotti"];
    expect(mostFrequently(oneEntry)).to.equal("Nicolás Biscotti");
  });

  it("should return Fer Fauret for list", () => {
    const list = ["Nciolás Biscotti", "Fer Fauret", "Fer Fauret"];
    expect(mostFrequently(list)).to.equal("Fer Fauret");
  });
});
