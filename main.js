function OneLoopSolution(arr, name) {
    var pairs = [0, 0], // for arr : [1,2,2,4,1] => [2,1]
        pairCount = 0, // for arr : [1,2,2,4,1] => 2
        sum = 0,
        obj = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }; //public , for arr : [1,2,2,4,1] => { 1: 2, 2: 4, 3: 0, 4: 4, 5: 0, 6: 0 }

    for (let a of arr) {
        sum += a;
        obj[a] += a;
        if (obj[a] / a === 2) { // Hvis der er 2 forekomster af tallet
            pairs[pairCount++] = a;
        }
    }

    obj['___________'] = "--------------------------------------";
    obj.twoKind = Math.max(pairs[0], pairs[1]) * 2; // for arr : [1,2,2,4,1] => 4
    obj.threeKind = pairs[0] * 3 <= obj[pairs[0]] ? pairs[0] * 3 : pairs[1] * 3 <= obj[pairs[1]] ? pairs[1] * 3 : 0;
    // Hvis der er 3 ens, må det være af tallet pairs[0] eller pairs[1]. Check da om 3 gange en disse findes i obj
    obj.fourKind = pairs[0] * 4 <= obj[pairs[0]] ? pairs[0] * 4 : 0;
    // Samme logik som ved 3 Ens
    obj.twoPairs = ((pairs[0] + pairs[1]) * 2) * (pairCount - 1); // for arr : [1,2,2,4,1] => 6
    // ret så den ikke returnerer -0 ved ingen par? -0 === 0 : true?  - Object.is(-0, 0); : false
    obj.fullHouse = obj.threeKind && obj.twoPairs ? sum : 0;
    obj.low = !obj[6] && !obj.twoKind ? 15 : 0;
    obj.high = !obj[1] && !obj.twoKind ? 20 : 0;
    obj.yatzy = obj.fourKind * 5 / 4 === sum ? 50 : 0;
    obj.chance = sum;

    return obj[name];
}

function ettere(arr) {
    return OneLoopSolution(arr, 1)
}

function toere(arr) {
    return OneLoopSolution(arr, 2)
}

function treere(arr) {
    return OneLoopSolution(arr, 3)
}

function firere(arr) {
    return OneLoopSolution(arr, 4)
}

function femmere(arr) {
    return OneLoopSolution(arr, 5)
}

function seksere(arr) {
    return OneLoopSolution(arr, 6)
}

function low(arr) {
    return OneLoopSolution(arr, 'low')
}

function high(arr) {
    return OneLoopSolution(arr, 'high')
}

function yatzy(arr) {
    return OneLoopSolution(arr, 'yatzy')
}

function twoKind(arr) {
    return OneLoopSolution(arr, 'twoKind')
}

function threeKind(arr) {
    return OneLoopSolution(arr, 'threeKind')
}

function fourKind(arr) {
    return OneLoopSolution(arr, 'fourKind')
}

function twoPairs(arr) {
    return OneLoopSolution(arr, 'twoPairs')
}

function fullHouse(arr) {
    return OneLoopSolution(arr, 'fullHouse')
}

function chance(arr) {
    return OneLoopSolution(arr, 'chance')
}

var arr = [2, 2, 3, 3, 3];
console.log(
    ettere(
        arr
    ),
    toere(
        arr
    ),
    treere(
        arr
    ),
    firere(
        arr
    ),
    femmere(
        arr
    ),
    seksere(
        arr
    ),
    low(
        arr
    ),
    high(
        arr
    ),
    yatzy(
        arr
    ),
    twoKind(
        arr
    ),
    threeKind(
        arr
    ),
    fourKind(
        arr
    ),
    twoPairs(
        arr
    ),
    fullHouse(
        arr
    ),
    chance(
        arr
    ),
)