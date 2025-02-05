require("dotenv").config();
const express = require('express');
const axios = require('axios');
const { isPrime, isPerfect, isArmstrong, digitSum } = require('../utils/NumUtils');

const router = express.Router();

router.get('/classify-number', async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const properties = [];

    if (isArmstrong(num)) properties.push('armstrong');
    if (num % 2 !== 0) properties.push('odd');
    else properties.push('even');

    try {
        const funFactRes = await axios.get(`${process.env.NUMBERS_API_URL}/${num}`);
        const funFact = funFactRes.data;

        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: digitSum(num),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ number: num, error: 'Failed to fetch fun fact' });
    }
});

module.exports = router;
