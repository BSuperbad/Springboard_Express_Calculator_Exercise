function validateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }

        result.push(valToNumber);
    }
    return result;
}

function getMean(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

function getMedian(nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const midIndex = Math.floor(sortedNums.length / 2);

    if (sortedNums.length % 2 === 0) {
        const middle1 = sortedNums[midIndex - 1]
        const middle2 = sortedNums[midIndex];
        return (middle1 + middle2) / 2
    } else {
        return sortedNums[midIndex];
    }
}

function getMode(nums) {
    const numCount = {};
    let maxCount = 0;
    let mode = null;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!numCount[num]) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }

        if (numCount[num] > maxCount) {
            maxCount = numCount[num];
            mode = num;
        }
    }

    return mode;
}

module.exports = {
    validateNumsArray,
    getMean,
    getMedian,
    getMode
};