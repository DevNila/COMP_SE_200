import { expect } from "chai"
import add from "../src/add.js"

// THis are the tests for add according to the test plan

describe ("addTestsPositive", () => {
    it("should add 3+4=7", () => {
        expect(add(3,4)).to.equal(7)
    });

    it("should add -1+2 = 1", () => {
        expect(add(-1,2)).to.equal(1)
    });

    it("shuold hanndle dubles: -3.54 + - 4", () => {
        expect(add(-3.54,-4)).to.equal(-7.54)
    });

    it("should handle zero: 0+-2", () => {
        expect(add(0,-2)).to.equal(-2)
    });
});

describe ("addBadInputs", () => {
    it("StringInput", () => {
        expect(() => add('a', 5)).to.throw(TypeError)
    });

    it("BoolInput", () => {
        expect(() => add(2, false)).to.throw(TypeError)
    });

    it("one input only", () => {
        expect(add(3)).to.equal(3)
    });

    it("no inputs", () => {
        expect(add()).to.equal(0)
    });
})