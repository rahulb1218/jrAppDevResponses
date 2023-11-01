//https://www.hackerrank.com/challenges/ashton-and-string/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'ashtonString' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function ashtonString(s, k) {
    let substrings = new Set(); //set of all substrings so no duplicates

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
        substrings.add(s.slice(i, j + 1)); //add all substrings to set using slice which takes start and end index
        }
    }
    let sortedSubstrings = Array.from(substrings); //convert set to array
    sortedSubstrings.sort();
    let concatenatedString = sortedSubstrings.join("");
    //console.log(concatenatedString);
    return concatenatedString.charAt(k-1)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const k = parseInt(readLine().trim(), 10);

        const res = ashtonString(s, k);

        ws.write(res + '\n');
    }

    ws.end();
}
