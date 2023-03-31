import { expect } from "chai";
import numberOfDifferentCharacters from "./numberOfDifferentCharacters.mjs";

/**
 * given an input string return the number of different
 * characters that it contains.
 * */

describe("number of different characters test", function () {
  it("should return 0 for an empty string", function () {
    expect(numberOfDifferentCharacters("")).to.equal(0);
  });

  it("should return 1 for s", function () {
    expect(numberOfDifferentCharacters("s")).to.equal(1);
  });

  it("should return 1 for ss", function () {
    expect(numberOfDifferentCharacters("ss")).to.equal(1);
  });

  it("should return 5 for isrsuuaruii", function () {
    expect(numberOfDifferentCharacters("isrsuuaruii")).to.equal(5);
  });
});
