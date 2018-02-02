var OneLoopSolution = require('./main.js');
// var ArrayInputFunctions = require('./functions.js');
var UseRegexSolution = require('./useRegex.js');


runTest(true);

function runTest(clear, size = 1000000) { // 1 million tager ca 16 sek - 10 millioner giver 'JavaScript heap out of memory'
   
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

    // let statistics = { 

    //     fullHouse : {
    //         expected : Math.round(size/ 25.92),
    //         result : 0    
    //     }, 
    //     yatzy : {
    //         expected: Math.round(size / 1296),
    //         result: 0
    //     }, 
    //     fourKind: {
    //         expected: Math.round(size / 51.84),
    //         result: 0
    //     },
    //     threeKind: {
    //         expected: Math.round(size / 6.48),
    //         result: 0
    //     }
    
    // };
    // http://mathworld.wolfram.com/Yahtzee.html

    var fejlBesked = ["Et input af: ", " af type ", " returnerer ikke samme output"];

   // let func = new ArrayInputFunctions(); // Parasitic constructor/ Factory - ('new' ikke nødvendig)

    for (let test of randomArray) {

        let useRegex  = new UseRegexSolution(test) 

        let oneLoop = OneLoopSolution; 
            

        // if (obj.fullHouse) statistics.fullHouse.result++;
        // if (obj.yatzy) statistics.yatzy.result++;
        // if (obj.fourKind && !obj.yatzy) {
        //     statistics.fourKind.result++;
        // }
        // if (obj.threeKind && !obj.yatzy && !obj.fourKind && !obj.fullHouse) {
        //     statistics.threeKind.result++;
        // }
        //if (obj.threeKind) statistics.threeKind.result++;
        
        /*
            Test af UseRegexSolution vs OneLoopSolution
            Bør jeg loope over disse i stedet?

        */
        assert(
            oneLoop.fullHouse(test) === useRegex.fullHouse(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fullHouse() returnerer: " + oneLoop.fullHouse + ' og useRegex.fullHouse() returnerer: ' + useRegex.fullHouse()
        );
      
        
        assert(
            oneLoop.twoPairs(test) === useRegex.twoPairs(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoPairs() returnerer: " + oneLoop.twoPairs + ' og useRegex.twoPairs() returnerer: ' + useRegex.twoPairs()
        );
     
        assert(
            oneLoop.twoKind(test) === useRegex.twoKind(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoKind() returnerer: " + oneLoop.twoKind + ' og useRegex.twoKind() returnerer: ' + useRegex.twoKind()
        );
     
        assert(
            oneLoop.threeKind(test) === useRegex.threeKind(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.threeKind() returnerer: " + oneLoop.threeKind + ' og useRegex.threeKind() returnerer: ' + useRegex.threeKind()
        );
      
        assert(
            oneLoop.fourKind(test) === useRegex.fourKind(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fourKind() returnerer: " + oneLoop.fourKind + ' og useRegex.fourKind() returnerer: ' + useRegex.fourKind()
        );
        
        assert(
            oneLoop.yatzy(test) === useRegex.yatzy(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.yatzy() returnerer: " + oneLoop.yatzy + ' og useRegex.yatzy() returnerer: ' + useRegex.yatzy()
        );
      
        assert(
            oneLoop.chance(test) === useRegex.chance(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.chance() returnerer: " + oneLoop.chance + ' og useRegex.chance() returnerer: ' + useRegex.chance()
        );
        assert(
            oneLoop.low(test) === useRegex.low(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.low() returnerer: " + oneLoop.low + ' og useRegex.low() returnerer: ' + useRegex.low()
        );

        assert(
            oneLoop.high(test) === useRegex.high(),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.high() returnerer: " + oneLoop.high + ' og useRegex.high() returnerer: ' + useRegex.high()
        );
        
        // /*
        //     Test af ArrayInputFunctions vs OneLoopSolution

        // */

        // assert(
        //     oneLoop[1] === func._ettere(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop[1] returnerer: " + oneLoop[1] + ' og func._ettere returnerer: ' + func._ettere(test)
        // );
        // assert(
        //     oneLoop[2] === func._toere(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop[2] returnerer: " + oneLoop[2] + ' og func._toere returnerer: ' + func._toere(test)
        // );
        // assert(
        //     oneLoop[3] === func._treere(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop[3] returnerer: " + oneLoop[3] + ' og func._treere returnerer: ' + func._treere(test)
        // );
        // assert(
        //     oneLoop[4] === func._firere(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop[4] returnerer: " + oneLoop[4] + ' og func._firere returnerer: ' + func._firere(test)
        // );
        // assert(
        //     oneLoop[5] === func._femmere(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop[5] returnerer: " + oneLoop[5] + ' og func._femmere returnerer: ' + func._femmere(test)
        // );
        // assert(
        //     oneLoop[6] === func._seksere(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop[6] returnerer: " + oneLoop[6] + ' og func._seksere returnerer: ' + func._seksere(test)
        // );
        // assert(
        //     oneLoop.low === func._low(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.low returnerer: " + oneLoop.low + ' og func._low returnerer: ' + func._low(test)
        // );
        // assert(
        //     oneLoop.high === func._high(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.high returnerer: " + oneLoop.high + ' og func._high returnerer: ' + func._high(test)
        // );    
        // assert(
        //     oneLoop.fullHouse === func._fullHouse(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.fullHouse returnerer: " + oneLoop.fullHouse + ' og func._fullHouse returnerer: ' + func._fullHouse(test)
        // );
        // assert(
        //     oneLoop.twoPairs === func._twoPairs(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.twoPairs returnerer: " + oneLoop.twoPairs + ' og func._twoPairs returnerer: ' + func._twoPairs(test)
        // );
        // assert(
        //     oneLoop.twoKind === func._twoKind(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.twoKind returnerer: " + oneLoop.twoKind + ' og func._twoKind returnerer: ' + func._twoKind(test)
        // );
        // assert(
        //     oneLoop.threeKind === func._threeKind(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.threeKind returnerer: " + oneLoop.threeKind + ' og func._threeKind returnerer: ' + func._threeKind(test)
        // );
        // assert(
        //     oneLoop.fourKind === func._fourKind(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.fourKind returnerer: " + oneLoop.fourKind + ' og func._fourKind returnerer: ' + func._fourKind(test)
        // );
        // assert(
        //     oneLoop.yatzy === func._yatzy(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.yatzy returnerer: " + oneLoop.yatzy + ' og func._yatzy returnerer: ' + func._yatzy(test)
        // );
        // assert(
        //     oneLoop.chance === func._chance(test),
        //     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
        //     "\noneLoop.chance returnerer: " + oneLoop.chance + ' og func._chance returnerer: ' + func._chance(test)
        // );
       
    }

    console.log("All tests passed!");
    console.timeEnd('t');
    //console.log(statistics)

}