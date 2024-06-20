// src/generateShortcode.test.js

const generateShortcode = require('./generateShortcode');

describe('generateShortcode', () => {
    test('generates a 2-word string separated by a hyphen', () => {
        const result = generateShortcode();
        expect(result.split('-').length).toBe(2);
    });

    test('generates a 3-word string separated by hyphens', () => {
        const result = generateShortcode(3);
        expect(result.split('-').length).toBe(3);
    });

    test('throws an error if the number of words is less than 1', () => {
        expect(() => generateShortcode(0)).toThrow("Number of words must be greater than 1");
    });

    test('throws an error if the number of words is negative', () => {
        expect(() => generateShortcode(-1)).toThrow("Number of words must be greater than 1");
    });
 
    test('throws an error if the number of words is not a number', () => {
        expect(() => generateShortcode("apple")).toThrow("Number of words must be a number");
    });
});

