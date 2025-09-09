const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const arr = input[1].trim().split(' ').map(Number);

    const counts = new Object();
    const startIdx = new Map();

    arr.forEach((num, idx) => {
        if (!counts[num]) {
            counts[num] = 1;
            startIdx.set(num, idx)
        } else { 
            counts[num]++;
        }
    })

    const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1] || startIdx.get(Number(a[0])) - startIdx.get(Number(b[0])));

    const res = Array(arr.length);
    let idx = 0;

    for (const [num, cnt] of sortedCounts) {
        for (let c = 0; c < cnt; c++) res[idx++] = num; 
    }

    console.log(res.join(' '));
}

solution(input);