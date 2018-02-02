var OneLoopSolution = require('./main.js');
// var ArrayInputFunctions = require('./functions.js');
var UseRegexSolution = require('./useRegex.js');

runTest(true);

function runTest(clear, size = 500000) { // 1 million tager ca 16 sek - 10 millioner giver 'JavaScript heap out of memory'
   
    console.time('t');

    if (clear) {
        console.clear();
    }

    var randomArray = (function (arrayLength, span, size) { // lav en array med size antal tilfældige arrays 
        var arr = [],
        arrSize = [];

        for (let i = 0; i < size; i++) {
            for (let ii = 0; ii < arrayLength; ii++) {
                arr.push(Math.floor((Math.random() * span[1]) + 1));
            }
            arrSize.push(arr);
            arr = [];
        }
        return arrSize;
    }(5, [1, 6], size))



    function assert(condition, message) {
        if (!condition) {
            throw message;
        }
    }

    var fejlBesked = ["Et input af: ", " af type ", " returnerer ikke samme output"];


   // let func = new ArrayInputFunctions(); // Parasitic constructor/ Factory - ('new' ikke nødvendig)

    for (let test of randomArray) {
    

        let useRegex  = new UseRegexSolution(test) 

        let oneLoop = OneLoopSolution; 
        
     
        
        /*
            Test af UseRegexSolution vs OneLoopSolution

        */
        assert(
            oneLoop.fullHouse(test) === useRegex.fullHouse(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] + // PUT ME IN A FUNCTION
            "\noneLoop.fullHouse() returnerer: " + oneLoop.fullHouse(test) + ' og useRegex.fullHouse() returnerer: ' + useRegex.fullHouse()
        );
     
        assert(
            oneLoop.twoPairs(test) === useRegex.twoPairs(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoPairs() returnerer: " + oneLoop.twoPairs(test) + ' og useRegex.twoPairs() returnerer: ' + useRegex.twoPairs()
        );
     
        assert(
            oneLoop.twoKind(test) === useRegex.twoKind(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoKind() returnerer: " + oneLoop.twoKind(test) + ' og useRegex.twoKind() returnerer: ' + useRegex.twoKind()
        );
     
        assert(
            oneLoop.threeKind(test) === useRegex.threeKind(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.threeKind() returnerer: " + oneLoop.threeKind(test) + ' og useRegex.threeKind() returnerer: ' + useRegex.threeKind()
        );
      
        assert(
            oneLoop.fourKind(test) === useRegex.fourKind(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fourKind() returnerer: " + oneLoop.fourKind(test) + ' og useRegex.fourKind() returnerer: ' + useRegex.fourKind()
        );
        
        assert(
            oneLoop.yatzy(test) === useRegex.yatzy(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.yatzy() returnerer: " + oneLoop.yatzy(test) + ' og useRegex.yatzy() returnerer: ' + useRegex.yatzy()
        );
      
        assert(
            oneLoop.chance(test) === useRegex.chance(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.chance() returnerer: " + oneLoop.chance(test) + ' og useRegex.chance() returnerer: ' + useRegex.chance()
        );
        assert(
            oneLoop.low(test) === useRegex.low(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.low() returnerer: " + oneLoop.low(test) + ' og useRegex.low() returnerer: ' + useRegex.low()
        );

        assert(
            oneLoop.high(test) === useRegex.high(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.high() returnerer: " + oneLoop.high(test) + ' og useRegex.high() returnerer: ' + useRegex.high()
        );
         
    }
    
    console.log("All tests passed!");
    console.timeEnd('t');

}