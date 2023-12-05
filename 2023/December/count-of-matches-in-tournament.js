// https://leetcode.com/problems/count-of-matches-in-tournament/
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0;
    let teams = n;
    while (teams > 1) {
        if (teams % 2 == 0) { // even
            matches += (teams / 2);
            teams = teams / 2;
        } else {
            matches += (teams - 1) / 2;
            teams = ((teams - 1) / 2) + 1;
        }
    }

    return matches;
};