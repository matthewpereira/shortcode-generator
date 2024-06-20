// src/generateShortcode.js

const wordList = require('./wordList.json');

const getRandomWord = () => wordList[Math.floor(Math.random() * wordList.length)];

const generateShortcode = (numWords = 2) => {
    if (numWords < 1 ) {
        throw new Error("Number of words must be greater than 1");
    }

    if (isNaN(numWords)) {
        throw new Error("Number of words must be a number");
    }
    
    const words = Array.from({ length: numWords }, getRandomWord);
    return words.join('-');
}

module.exports = generateShortcode;
