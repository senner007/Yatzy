function UseRegexSolution (arr) {

     // sorter, til string og regexr match tal 1-6 mindst 2 efter hinanden - for arr: [3,2,2,2,3] => ['222','33']
    var _regexArr = (function getRegex(arr) {
        var clone = arr.slice(0);
        return clone.sort().join('').match(/([1-6])\1+/g);
    })(arr)

    var _sum = (function get_Sum(arr) {
        return arr.reduce(function (a, b) { return a + b });
    })(arr)

    function low() {
        return !_regexArr && _sum === 15 ? 15 : 0
    }

    function high() {
        return !_regexArr && _sum === 20 ? 20 : 0
    }

    function yatzy() {
        if (!_regexArr) return 0;
        return _regexArr[0].length === 5 ? 50 : 0
    }

    function twoKind() {
        if (!_regexArr) return 0;
        var pairs = _regexArr.map(function (m) { // REMOVE ME !!
            return m[0];
        })
        return Math.max(...pairs) * 2;
    }

    function chance() {
        return _sum;
    }

    function fourKind() {
        if (!_regexArr) return 0;
        return _regexArr[0].length >= 4 ? _regexArr[0][0] * 4 : 0
    }

    function threeKind() {
        if (!_regexArr) return 0;
        return ('' + Math.max(..._regexArr)).length >= 3 ? ('' + Math.max(..._regexArr))[0] * 3 : 0;
    }

 
    function twoPairs() {
        if (!_regexArr) return 0;
        return _regexArr.length === 2 ? _regexArr[0][0] * 2 + _regexArr[1][0] * 2 : 0
    }

    function fullHouse() {
        if (!_regexArr) return 0;
        return _regexArr.length === 2 && (_regexArr[0].length === 3 || _regexArr[1].length === 3) ? _sum : 0
    }

    return {
        twoKind,
        yatzy,
        fourKind,
        threeKind,
        twoPairs,
        fullHouse,
        chance,
        low,
        high
    }

}

module.exports = UseRegexSolution
