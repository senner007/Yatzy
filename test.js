var OneLoopSolution = require('./main.js');
var ArrayInputFunctions = require('./functions.js');
var UseRegexSolution = require('./useRegex.js');



runTest(true);

function runTest(clear) {
   
    console.time('t');

    if (clear) {
        console.clear();
    }

    var testArray = (function () { // lav en array med size antal tilfældige arrays 

        var pos = [1, 2, 3, 4, 5, 6];
        var total = [];

        pos.forEach(function (pos1) {
            pos.forEach(function (pos2) {
                pos.forEach(function (pos3) {
                    pos.forEach(function (pos4) {
                        pos.forEach(function (pos5) {
                            total.push([pos1, pos2, pos3, pos4, pos5]);
                        });
                    });
                });
            });
        });
        return total;
    }([1, 2, 3, 4, 5, 6]));



    function assert(condition, message) {
        if (!condition) {
            throw message;
        }
    }

    var fejlBesked = ["Et input af: ", " af type ", " returnerer ikke samme output"];
    

   // let func = new ArrayInputFunctions(); // Parasitic constructor/ Factory - ('new' ikke nødvendig)
    var func = ArrayInputFunctions()

    for (let test of testArray) {
    

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

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        assert(
            oneLoop.ettere(test) === func._ettere(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.ettere(test) returnerer: " + oneLoop.ettere(test) + ' og func._ettere(test) returnerer: ' + func._ettere(test)
        );

        assert(
            oneLoop.ettere(test) === func._ettere_2(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.ettere(test) returnerer: " + oneLoop.ettere(test) + ' og func._ettere_2(test) returnerer: ' + func._ettere_2(test)
        );

        assert(
            oneLoop.toere(test) === func._toere(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.toere(test) returnerer: " + oneLoop.toere(test) + ' og func._toere(test) returnerer: ' + func._toere(test)
        );

        assert(
            oneLoop.toere(test) === func._toere_2(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.toere(test) returnerer: " + oneLoop.toere(test) + ' og func._toere_2(test) returnerer: ' + func._toere_2(test)
        );

        assert(
            oneLoop.threeKind(test) === func._threeKind(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.threeKind(test) returnerer: " + oneLoop.threeKind(test) + ' og func._threeKind(test) returnerer: ' + func._threeKind(test)
        );

        assert(
            oneLoop.threeKind(test) === func._threeKind_2(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.threeKind(test) returnerer: " + oneLoop.threeKind(test) + ' og func._threeKind_2(test) returnerer: ' + func._threeKind_2(test)
        );

        assert(
            oneLoop.twoPairs(test) === func._twoPairs(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoPairs(test) returnerer: " + oneLoop.twoPairs(test) + ' og func._twoPairs(test) returnerer: ' + func._twoPairs(test)
        );

        assert(
            oneLoop.twoPairs(test) === func._twoPairs_2(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoPairs(test) returnerer: " + oneLoop.twoPairs(test) + ' og func._twoPairs_2(test) returnerer: ' + func._twoPairs_2(test)
        );

        assert(
            oneLoop.twoPairs(test) === func._twoPairs_3(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoPairs(test) returnerer: " + oneLoop.twoPairs(test) + ' og func._twoPairs_3(test) returnerer: ' + func._twoPairs_3(test)
        );


        assert(
            oneLoop.twoPairs(test) === func._twoPairs_4(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.twoPairs(test) returnerer: " + oneLoop.twoPairs(test) + ' og func._twoPairs_4(test) returnerer: ' + func._twoPairs_4(test)
        );

      
        assert(
            oneLoop.yatzy(test) === func._yatzy(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.yatzy(test) returnerer: " + oneLoop.yatzy(test) + ' og func._yatzy(test) returnerer: ' + func._yatzy(test)
        );

        assert(
            oneLoop.yatzy(test) === func._yatzy_2(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.yatzy(test) returnerer: " + oneLoop.yatzy(test) + ' og func._yatzy_2(test) returnerer: ' + func._yatzy_2(test)
        );

        assert(
            oneLoop.fullHouse(test) === func._fullHouse(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fullHouse(test) returnerer: " + oneLoop.fullHouse(test) + ' og func._fullHouse(test) returnerer: ' + func._fullHouse(test)
        );

        assert(
            oneLoop.fullHouse(test) === func._fullHouse_2(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fullHouse(test) returnerer: " + oneLoop.fullHouse(test) + ' og func._fullHouse_2(test) returnerer: ' + func._fullHouse_2(test)
        );


        assert(
            oneLoop.fullHouse(test) === func._fullHouse_3(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fullHouse(test) returnerer: " + oneLoop.fullHouse(test) + ' og func._fullHouse_3(test) returnerer: ' + func._fullHouse_3(test)
        );

        assert(
            oneLoop.fullHouse(test) === func._fullHouse_4(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fullHouse(test) returnerer: " + oneLoop.fullHouse(test) + ' og func._fullHouse_4(test) returnerer: ' + func._fullHouse_4(test)
        );

        assert(
            oneLoop.fullHouse(test) === func._fullHouse_5(test),
            fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] +
            "\noneLoop.fullHouse(test) returnerer: " + oneLoop.fullHouse(test) + ' og func._fullHouse_5(test) returnerer: ' + func._fullHouse_5(test)
        );
         
    }
    
    console.log("All tests passed!");
    console.timeEnd('t');

}