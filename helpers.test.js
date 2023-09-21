const {
    getMean,
    getMedian,
    getMode,
} = require("./helpers");



describe("getMean function", function () {
    it("gets the mean of an array of numbers", function () {
        expect(getMean([1, -1, 4, 2])).toEqual(1.5)
    })
})

describe("getMedian function", function () {
    it("finds the median of an even set of numbers", function () {
        expect(getMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("gets the median of an odd set", function () {
        expect(getMedian([1, -1, 4])).toEqual(1)
    })
})


describe("getMode function", function () {
    it("finds the mode", function () {
        expect(getMode([1, 1, 1, 2, 2, 3])).toEqual(1)
    })
})