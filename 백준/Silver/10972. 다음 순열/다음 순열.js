const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    let tar = -1;
    for (let n = N - 1; n > 0; n--) {
        if (arr[n - 1] < arr[n]) {
            tar = n - 1;
            break;
        }
    }

    if (tar === -1) return '-1';
    
    const counts = Array(N + 1).fill(0);
    for (let c = 0; c < tar + 1; c++) {
        counts[arr[c]]++;
    }

    let temp = arr[tar];
    while (counts[temp] === 1) temp++;
    counts[arr[tar]]--;
    arr[tar] = temp;
    counts[arr[tar]]++;

    let cur = 1;
    for (let c = tar + 1; c < N; c++) {
        while (counts[cur] === 1) cur++;

        arr[c] = cur;
        counts[cur]++;
    }

    return arr.join(' ');
}

console.log(
    solution(input)
);