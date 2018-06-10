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
        return _regexArr[0].length === 5 ? 50 + _regexArr[0][0] * 5 : 0
    }

    function twoKind() {
        if (!_regexArr) return 0;
        return _regexArr[_regexArr.length-1][0] * 2;
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

        var result = arr.slice(0).sort().join('').match(/\b(\d)\1{2}(\d)\2{1}(?<!\1)\b|\b(\d)\3{1}(\d)\4{2}(?<!\3)\b/g);
        return result ? arr.reduce((a,b) => a+b,0) : 0
        
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
