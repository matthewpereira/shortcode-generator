// src/generateShortcode.js

const crypto = require('crypto');
const wordList = require('./wordList.json');

const getRandomWord = () => {
    const randomIndex = crypto.randomInt(0, wordList.length);
    return wordList[randomIndex];
};

const generateShortcode = (numWords = 2) => {
    if (numWords < 1 ) {
        throw new Error("Number of words must be greater than 1");
    }

    if (isNaN(numWords)) {
        throw new Error("Number of words must be a number");
    }
    
    const words = Array.from({ length: numWords }, getRandomWord);
    return words.join('-');
};

module.exports = generateShortcode;
