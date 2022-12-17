import { expect } from "chai";
import { default as eq } from "../src/eq.js";

describe("eq() where \n   const object = { 'a': 1 }\n   const other = { 'a': 1 }", () => {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * const object = { 'a': 1 }
     * const other = { 'a': 1 }
     *
     * eq(object, object)
     * // => true
     *
     * eq(object, other)
     * // => false
     *
     * eq('a', 'a')
     * // => true
     *
     * eq('a', Object('a'))
     * // => false
     *
     * eq(NaN, NaN)
     * // => true
     */
    const object = { 'a': 1 }
    const other = { 'a': 1 } 
    it("eq('a', 'a') should return true", () => {
        expect(eq('a', 'a')).to.equal(true);
    });
    it("eq('a', 'b') should return false", () => {
        expect(eq('a', 'b')).to.equal(false);
    });
    it("eq(NaN, NaN) should return true", () => {
        expect(eq(NaN, NaN)).to.equal(true);
    });
    it("eq(object, object) should return true", () => {
        expect(eq(object, object)).to.equal(true);
    });
    it("eq(object, other) should return false", () => {
        expect(eq(object, other)).to.equal(false);
    });
});