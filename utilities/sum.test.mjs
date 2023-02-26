import { expect } from "chai";
import sum from "./sum.mjs";

describe("sum test", function () {
  it("should return 3 for 2 and 1", function () {
    expect(sum(2, 1)).to.equal(3);
  });
});
