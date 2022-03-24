
/**
 * @param {number} numberOfChars
 * @param {number} value
 * @return {string}
 */
var getSmallestString = function (numberOfChars, value) {

    const ascii_a = 97;
    const maxValueOfChar = 26;
    const smallestString = new Array(numberOfChars);

    while (numberOfChars > 0) {
        let valueCurrentChar = Math.min((value - numberOfChars + 1), maxValueOfChar);
        smallestString[numberOfChars - 1] = String.fromCodePoint(ascii_a + valueCurrentChar - 1);
        value -= valueCurrentChar;
        numberOfChars--;
    }
    return smallestString.join('');
};
