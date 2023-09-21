const express = require('express');
const {
    validateNumsArray,
    getMean,
    getMedian,
    getMode
} = require('./helpers')
const ExpressError = require('./expressError')

const app = express();

app.use(express.json());


app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Nums parameter is missing', 400)
    }
    const numsEntered = req.query.nums.split(',').map(Number);
    const nums = validateNumsArray(numsEntered)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    const mean = getMean(numsEntered);
    return res.json({
        operation: 'mean',
        value: mean
    })
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Nums parameter is missing', 400)
    }
    const numsEntered = req.query.nums.split(',').map(Number);
    const nums = validateNumsArray(numsEntered)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const median = getMedian(numsEntered);
    return res.json({
        operation: 'median',
        value: median
    })
})

app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Nums parameter is missing', 400)
    }
    const numsEntered = req.query.nums.split(',').map(Number);
    const nums = validateNumsArray(numsEntered)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const mode = getMode(numsEntered);
    return res.json({
        operation: 'mode',
        value: mode
    })
})

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.msg
    });
});




app.listen(3000, () => {
    console.log("Server running on port 3000")
});