"use strict";

// Eksamensopgave 2 Niels Gregersen Programmering s. 5/2 2018
// I denne opgave skal du lave funktioner, som kan beregne point i et Yatzy - spil.Hvis du ikke kender reglerne til Yatzy kan du se dem p� https://da.wikipedia.org/wiki/Yatzy Vi bruger standardreglerne som beskrevet i sektionen Regler.

// Du skal lave en funktion for hver mulig kombinationer(ettere, toere, ..., chance, yatzy).Funktionen skal tage et array med fem terninger(alts� tal fra 1 til 6) som parameter og returnere, hvor mange point den givne kombination af terninger giver ved den valgte mulighed.

// Eksempelvis giver terningerne 1 3 5 3 1 seks point ved treere(der er 2 treere, derfor 2 x 3 point), men 0 point ved Fire ens(for der er ikke fire ens).

// Nedenst�ende kode viser, hvordan funktionen for ettere kan laves.

// function ettere(terninger) {
//         let point = 0;
//         for (let i = 0; i < 5; i++) {
//             if (terninger[i] == 1) { // Det er en etter
//                 point += 1; // Hver etter giver �t point
//             }
//         }
//         return point;
//     }
// console.log(ettere([1, 2, 3, 4, 5]));
// console.log(ettere([1, 2, 1, 2, 1]));
// console.log(ettere([5, 5, 5, 5, 5]));

// Lav en funktion til hver af mulighederne beskrevet i reglerne, alts�:

// Ettere
// Toere
// Treere
// Firere
// Femmere
// Seksere
// Et par
// To par
// Tre ens
// Fire ens
// Lav
// H�j
// Fuldt hus
// Chance
// Yatzy
// Hvis der er nogle af funktionerne, du ikke kan lave helt f�rdige, s� lav s� meget af dem, som du kan.S� taler vi om resten til eksamen.

//     N�r du skriver din kode, s� t�nk over:

// At koden skal v�re let at l�se og forst� for andre
// Om du kan genbruge kode og p� den m�de skrive mindre kode
// Hvordan du vil teste, at funktionerne er korrekte
 

function getObject(arr, name) {

    // if (getObject.cache[arr]) {
    //     console.log('hello from cache')
    //     return getObject.cache[arr][name];
    // }
    // console.log('looping...')

    var pairs = [0, 0], // for arr : [1,2,2,4,1] => [2,1]
        pairCount = 0, // for arr : [1,2,2,4,1] => 2
        sum = 0,
        obj = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }; //public , for arr : [1,2,2,4,1] => { 1: 2, 2: 4, 3: 0, 4: 4, 5: 0, 6: 0 }

    for (let a of arr) {
        sum += a;
        obj[a] += a;        // jeg skriver og læser direkte til og fra objektet, 
                            // idet at nummer indexeret objekter gerne skulle være lige så hurtige som et array
                            // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/
        if (obj[a] / a === 2) { // Hvis der er 2 forekomster af tallet
            pairs[pairCount++] = a;
        }
    }

    // Betingelser kan også placeres i funktionerne
    obj.twoKind = Math.max(pairs[0], pairs[1]) * 2; // for arr : [1,2,2,4,1] => 4
    //alternativ : obj.twoKind = pairs[0] - pairs[1] > 0 ? pairs[0] * 2 : pairs[1] * 2;
    obj.threeKind = pairs[0] * 3 <= obj[pairs[0]] ? pairs[0] * 3 : pairs[1] * 3 <= obj[pairs[1]] ? pairs[1] * 3 : 0;
    // Hvis der er 3 ens, må det være af tallet pairs[0] eller pairs[1]. Check da om 3 gange en disse findes i obj
    obj.fourKind = pairs[0] * 4 <= obj[pairs[0]] ? pairs[0] * 4 : 0;
    // Samme logik, men der kan kun være 1 par
    // Jeg antager, at der kun findes et par ved fire ens
    obj.twoPairs = ((pairs[0] + pairs[1]) * 2) * (pairCount - 1); // for arr : [1,2,2,4,1] => 6 
    // pairCount sikrer at 0 returneres ved ingen eller 1 par. 
    // ret så den ikke returnerer -0 ved ingen par? -0 === 0 => true(?!) - Object.is(-0, 0) => false, 
    // løsn : erstat (pairCount - 1) med  Number(!!pairs[1])
    obj.fullHouse = obj.threeKind && pairCount === 2 ? sum : 0; 
    // Her skulle funktionen threeKind kaldes, hvis betingelserne var placeret i funktionerne
    obj.low = !pairCount && sum === 15 ? 15 : 0; // Jeg antager at terningerne 12345 giver et resultat af 15
    obj.high = !pairCount && sum === 20 ? 20 : 0; // Jeg antager at terningerne 23456 giver et resultat af 20
    obj.yatzy = obj.fourKind * 5 / 4 === sum ? 50 + sum : 0; // Jeg antager at yatzy defineres som summen af fem ens plus 50
    obj.chance = sum;
    
    // getObject.clearCache(); // Nye terninger
    // getObject.cache[arr] = obj;    
    return obj[name];
}

// (getObject.clearCache = function () { 
//     getObject.cache = {};
// })();
// Jeg antager at funktionen, med denne struktur, vil blive kaldt flere gange med det samme array som input. 
// Derfor kan der tilføjes et cache object på funktionen. Dette er naturligvis tiltænkt større datamængder/beregninger.

// console.log(ettere([1,1,2,2,1])) // looping... 3
// console.log(fullHouse([1,1,2,2,1])) // hello from cache... 7 (samme array)
// console.log(yatzy([1,2,3,4,5])) // looping... 0

// Implementeret som i 'Javascript Patterns' af Stoyan Stefanov s. 76 - 'Function Properties - A Memoization Pattern'



function ettere(arr) {
    return getObject(arr, 1)
}

function toere(arr) {
    return getObject(arr, 2)
}

function treere(arr) {
    return getObject(arr, 3)
}

function firere(arr) {
    return getObject(arr, 4)
}

function femmere(arr) {
    return getObject(arr, 5)
}

function seksere(arr) {
    return getObject(arr, 6)
}

function low(arr) {
    return getObject(arr, 'low')
}

function high(arr) {
    return getObject(arr, 'high')
}

function yatzy(arr) {
    return getObject(arr, 'yatzy')
}

function twoKind(arr) {
    return getObject(arr, 'twoKind')
}

function threeKind(arr) {
    return getObject(arr, 'threeKind')
}

function fourKind(arr) {
    return getObject(arr, 'fourKind')
}

function twoPairs(arr) {
    return getObject(arr, 'twoPairs')
}

function fullHouse(arr) {
    return getObject(arr, 'fullHouse')
}

function chance(arr) {
    return getObject(arr, 'chance')
}


// Test af kode: 

// For at teste koden kan man skrive flere løsninger på ovenstående problem og derefter sammenlige resultatet. 
// Det kan eksempelvis gøres ved at tilfældighedsgenerere et antal arrays, 
// og derpå sammenligner resultater med disse som input på automatiseret vis.  

// Oprettelse af 1 million tilfældige yatzy arrays :

// var randomArray = (function (arrayLength, span, size) { 
//     var arr = [],
//         arrSize = [];

//     for (let i = 0; i < size; i++) {
//         for (let ii = 0; ii < arrayLength; ii++) {
//             arr.push(Math.floor((Math.random() * span[1]) + 1));
//         }
//         arrSize.push(arr);
//         arr = [];
//     }
//     return arrSize;
// }(5, [1, 6], 1000000))

// Eksempel på en assert function : 

// function assert(condition, message) {
//     if (!condition) {
//         throw message;
//     }
// }

// Derpå selve testen :

// assert(
//     oneLoop.fullHouse(test) === useRegex.fullHouse(),
//     fejlBesked[0] + test + fejlBesked[1] + (typeof test) + fejlBesked[2] + 
//     "\noneLoop.fullHouse() returnerer: " + oneLoop.fullHouse(test) + ' og useRegex.fullHouse() returnerer: ' + useRegex.fullHouse()
// );

// Her tester jeg ovenstående løsning med en anden.

// Denne måde at teste på lader sig ikke altid gøre, og den er ikke sikker, da man kan have tænkt forkert i begge løsninger.
// En anden måde at teste på, er ved at teste et specifikt input mod et forventet output.


module.exports = {
    twoKind,
    yatzy,
    fourKind,
    threeKind,
    twoPairs,
    fullHouse,
    chance,
    low,
    high,
    ettere,
    toere,
    treere,
    firere,
    femmere,
    seksere
}