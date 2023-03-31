import { expect } from "chai";
import orderByOccurrences from "./orderByOccurrences.mjs";

/*
 * given an input string order desc (most frequently first)
 * all characters by occurrences, into an array structure.
 * Return an empty Array if the string is empty.
 * Optionally return the first N characters if the second
 * parameters is supplied
 * */

describe("orderByOccurrences test", function () {
  it("should return [] for an empty string", function () {
    expect(orderByOccurrences("")).to.deep.equal([]);
  });

  it('should return ["A"] for A', function () {
    expect(orderByOccurrences("A")).to.deep.equal(["A"]);
  });

  it('should return ["A"] for AA', function () {
    expect(orderByOccurrences("AA")).to.deep.equal(["A"]);
  });

  it('should return ["A", "B", "C", "D"] for ABACCBDD', function () {
    expect(orderByOccurrences("ABACCBDD")).to.deep.equal(["A", "B", "C", "D"]);
  });

  it('should return ["B", "A"] for ABB', function () {
    expect(orderByOccurrences("ABB")).to.deep.equal(["B", "A"]);
  });

  it('should return ["B", "C" "A"] for ABBCC', function () {
    expect(orderByOccurrences("ABBCC")).to.deep.equal(["B", "C", "A"]);
  });
});
