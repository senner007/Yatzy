function ArrayInputFunctions () {

    

    function _ettere(terninger) {
        let point = 0;
        for (let i = 0; i < 5; i++) {
            if (terninger[i] == 1) { // Det er en etter
                point += 1; // Hver etter giver �t point
            }
        }
        return point;
    }

    function _ettere_2(arr) {

        return arr.filter(f => f === 1).reduce((a, b) => (a+b), 0)
    }

    function _toere(arr) {
        let point = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] == 2) { // Det er en toer
                point += 2; // Hver toer giver to point
            }
        }
        return point;
    }

    function _toere_2(arr) {

        return arr.filter(f => f === 2).reduce((a, b) => (a + b), 0)
    }

    function _treere(arr) {
        let point = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] == 3) { // Det er en treer
                point += 3; // Hver treer giver tre point
            }
        }
        return point;
    }

    function _firere(arr) {
        let point = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] == 4) { // Det er en firer
                point += 4; // Hver firer giver fire point
            }
        }
        return point;
    }

    function _femmere(arr) {
        let point = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] == 5) { // Det er en femmer
                point += 5; // Hver femmer giver fem point
            }
        }
        return point;
    }

    function _seksere(arr) {
        let point = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] == 6) { // Det er en sekser
                point += 6; // Hver sekser giver seks point
            }
        }
        return point;
    }

    function _fullHouse(arr) {
        var count1 = 0,
            count2 = 0,
            multiples = [];
        for (let a of arr) {
            if (a === multiples[0]) { count1++; }
            else if (a === multiples[1]) { count2++; }
            else { multiples.push(a) }
        }
        return count1 * count2 === 2 ? ++count1 * multiples[0] + ++count2 * multiples[1] : 0
    }

    function _twoPairs(arr) { // kan også bruge metoden fra _threeKind
        var pairs = []
        var num = 0;
        arr.forEach(function (v, i) {
            if (arr.indexOf(v) != arr.lastIndexOf(v) && !pairs.includes(v)) {
                pairs.push(v)
            }
        });
        return pairs.length === 2 ? 2 * (pairs[0] + pairs[1]) : 0
    }

    function _twoPairs_2(arr) {
        var clone = arr.slice(0);
        clone.sort()
        var point = 0;
        var counter = 0

        for (let i = 0; i < arr.length - 1; i++) {
            if (clone[i] === clone[i + 1] && point / 2 != clone[i]) {
                point += clone[i] * 2
                counter++;
                if (counter === 2) {
                    return point;
                }
            }
        }
        return 0;
    }


    function _threeKind(arr) {
        var counter = 0
        var obj = {};
        var found;
        for (let a of arr) {
            if (obj[a] == undefined) { obj[a] = 1 }
            else { obj[a]++ }
            if (obj[a] === 3) {
                found = a * 3;
                break;   
            }
        }
        return found || 0;
    }

   

    function _threeKind_2(terninger) {
        var clone = terninger.slice(0)
        var regexResult = clone.sort().join('').match(/([1-6])\1+\1+/g);
        return regexResult ? regexResult[0][0] * 3 : 0;
    }


    function _fourKind(arr) {
        var counter = 0
        var obj = {};
        var found;
        for (let a of arr) {
            if(obj[a] == undefined) { obj[a] = 1}
            else {obj[a]++ }
            if( obj[a] === 4) {
                found = a *4;
                break;
            }     
        };
        return found || 0;
    }

    // console.log(_fourKind([3,3,3,3,3]))



    function _yatzy(arr) {
        var isYatzy = []
        for(let a of arr) {
            if (isYatzy[0] != a) {
                isYatzy.push(a)
            }
        }
        return isYatzy.length ===1 ? 50 + arr[0] * 5 : 0
    
    }

    function _yatzy_2(arr) {
        return arr.sort()[0] === arr[4] ? arr[0] * 5 + 50 : 0;
    }


    function _twoKind(arr) {
        var pairs = []
        var num = 0;
        arr.forEach(function (v, i) {
            if (arr.indexOf(v) != arr.lastIndexOf(v) && !pairs.includes(v)) {
                pairs.push(v)
            }
        });
        return pairs.length >= 1 ? 2 * (Math.max(...pairs)) : 0
    }


    function _low(arr) {
        var sum = 0;
        var low = true;
        for(let a of arr) {
            sum +=a;
            if (arr.indexOf(a) != arr.lastIndexOf(a) || a === 6) {
                low = false;
                break;
            }
        }

     return low && sum === 15 ? 15 : 0
    }

    function _low_2(arr) {
        var clone = arr.slice(0);
        return clone.sort().join('') === '12345' ? 15 : 0
    }


    function _high(arr) {
        var sum = 0;
        var low = true;
        for (let a of arr) {
            sum += a;
            if (arr.indexOf(a) != arr.lastIndexOf(a) || a === 1) {
                low = false;
                break;
            }
        }

        return low && sum === 20 ? 20 : 0
    }


    function _high_2(arr) {
        var clone = arr.slice(0);
        return clone.sort().join('') === '23456' ? 20 : 0
    }

    function _chance(arr) {
        return arr.reduce((a,b) => a +b);
    }

    return  {
        _twoKind,
        _yatzy,
        _yatzy_2,
        _fourKind,
        _threeKind,
        _threeKind_2,
        _twoPairs,
        _twoPairs_2,
        _fullHouse,
        _chance,
        _low,
        _low_2,
        _high,
        _high_2,
        _ettere,
        _ettere_2,
        _toere,
        _toere_2,
        _treere,
        _firere,
        _femmere,
        _seksere
    }
}

module.exports = ArrayInputFunctions;