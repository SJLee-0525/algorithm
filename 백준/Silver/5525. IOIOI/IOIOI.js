const solution = (input) => {
    const [N, M] = input.slice(0, 2).map(Number);
    const arr = input[2].split('');
    
    const lengthList = new Array();
    let isI = arr[0] === 'I';
    let lengthOfIOI = arr[0] === 'I' ? 1 : 0;

    for (let i = 0; i < M; i++) {
        if (isI) {
            if (arr[i] === 'I') {
                if (lengthOfIOI > 2) lengthList.push(Math.floor(lengthOfIOI / 2));
                lengthOfIOI = 1;
            } else {
                isI = false;
                lengthOfIOI++;
            }
        } else {
            if (arr[i] === 'O') {
                if (lengthOfIOI > 2) lengthList.push(Math.floor((lengthOfIOI - 1) / 2));
                lengthOfIOI = 0;
            } else {
                isI = true;
                lengthOfIOI++;
            }
        }
    }

    if (lengthOfIOI > 2) {
        if (isI) lengthList.push(Math.floor(lengthOfIOI / 2));
        else lengthList.push(Math.floor((lengthOfIOI - 1) / 2));
    }

    let res = 0;
    lengthList.forEach((countOfO) => { if (N <= countOfO) res += countOfO - N + 1 });

    console.log(res);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);