const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const [frontPattern, tailPattern] = input[1].trim().split('*');

    const test = (fileName) => {
        const check = new Array(fileName.length).fill(false);

        for (let f = 0; f < frontPattern.length; f++) {
            if (fileName[f] !== frontPattern[f]) return false;

            check[f] = true;
        }

        for (let t = 0; t < tailPattern.length; t++) {
            if (check[fileName.length - t - 1] || fileName[fileName.length - t - 1] !== tailPattern[tailPattern.length - t - 1]) return false;
        }

        return true;
    }

    const res = new Array();

    for (let n = 2; n < 2 + N; n++) {
        const fileName = input[n].trim();

        res.push( test(fileName) ? 'DA' : 'NE' );        
    }

    console.log(res.join('\n'));
}

solution(input);