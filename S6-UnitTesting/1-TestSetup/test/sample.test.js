const {add} = require('../src/sample');

// Lifecycle Hook
// afterEach, afterAll, beforeEach, beforeAll

describe("Test addition of 2 numbers", () => {
    test("Should add 2 positive numbers", () => {
        expect(add(4,5)).toBe(9);
    });

    it("Should add 2 negative numbers", () => {
        expect(add(-4, -5)).toBe(-9);
    });

    it("Should not add strings", () => {
        expect(add("Hello","World")).toBe(-1);
    });


    test("Should have 2 parameters", () => {
        expect(add()).toBe(-1);
    });

});

