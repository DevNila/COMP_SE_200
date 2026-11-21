import {expect} from "chai"
import toNumber from "../src/toNumber.js"

describe ("toNumberTestsStringInputs", () => {
    it("should convert integers", () => {
        expect(toNumber('5')).to.equal(5)
    });

    it("should convert 0.0", () => {
        expect(toNumber('0.0')).to.equal(0)
    });

    it("should convert doubles", () => {
        expect(toNumber('3.45')).to.equal(3.45)
    });

    it("should convert negatives", () => {
        expect(toNumber('-2.4')).to.equal(-2.4)
    });

    it("should ignore whitespaces etc", () => {
        expect(toNumber(' 4\t\n')).to.equal(4)
    });

    it("'Infinity' should be Infinity", () => {
        expect(toNumber('Infinity')).to.equal(Infinity)
    });

    it("d should be NaN", () => {
        expect(isNaN(toNumber('d'))).to.equal(true)
    });
    
    it("empty string should be 0", () => {
        expect(toNumber('')).to.equal(0)
    });

})

describe("toNumberTestsNonStringInputs", () => {
    it("should leave nubmers as they are", () => {
        expect(toNumber(-19.99)).to.equal(-19.99)
    });

    it("should convert bool true to 1", () => {
        expect(toNumber(true)).to.equal(1)
    });

    it("should convert false to 0", () => {
        expect(toNumber(false)).to.equal(0)
    });

    it("NaN should be NaN", () => {
        expect(isNaN(toNumber(NaN))).to.equal(true)
    });
   

})