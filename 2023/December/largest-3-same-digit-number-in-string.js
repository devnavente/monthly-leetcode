// https://leetcode.com/problems/largest-3-same-digit-number-in-string/
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let good = -1;

    for (let i = 0; i < num.length; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            good = Math.max(parseInt(num[i]), good);
        }
    }

    if (good < 0) {
        return '';
    }

    return good.toString().concat(good).concat(good);
};