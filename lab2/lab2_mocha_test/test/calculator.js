var expect = require("chai").expect;
var calc = require("../app/calculator");

describe("Calculator test cases", ()=>{
    describe("Test add", ()=>{
        it("add(5, 2) expected result 7", ()=>{
            expect(calc.add(5,2)).to.equal(7)
        });
    });

    describe("Test add fail", () => {
        it("add(5,2) expected result 8", ()=>{
            expect(calc.add(5,2)).to.equal(8)
        });
    });
    

    describe("Test subtract", () => {
        it("sub(5, 2) expected result 3", () => {
            expect(calc.sub(5, 2)).to.equal(3)
        });
    });
    
    describe("Test subtract fail", () => {
        it("sub(5,2) expected result 5", () => {
            expect(calc.sub(5, 2)).to.equal(5)
        });
    });

    describe("Test multiply", () => {
        it("mul(5, 2) expected result 10", () => {
            expect(calc.mul(5, 2)).to.equal(10)
        });
    });

    describe("Test multiply fail", () => {
        it("mul(5,2) expected result 12", () => {
            expect(calc.sub(5, 2)).to.equal(12)
        });
    });

    describe("Test divide", () => {
        it("div(10, 2) expected result 5", () => {
            expect(calc.div(10, 2)).to.equal(5)
        });
    });

    describe("Test divide fail", () => {
        it("div(10,2) expected result 2", () => {
            expect(calc.div(10, 2)).to.equal(2)
        });
    });
});