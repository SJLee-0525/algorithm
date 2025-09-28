const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    if (N < 16) return 'impossible';

    const STD = N - 4;
    const info = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

    for (let left = 0; left < 100; left++) {
        const leftCnt = info[Math.floor(left / 10)] + info[left % 10];

        for (let right = 0; right < 100 - left; right++) {
            const rightCnt = info[Math.floor(right / 10)] + info[right % 10];

            const cal = left + right;
            const calCnt = info[Math.floor((cal) / 10)] + info[(cal) % 10];

            if (leftCnt + rightCnt + calCnt === STD) {
                return `${left.toString().padStart(2, '0')}+${right.toString().padStart(2, '0')}=${cal.toString().padStart(2, '0')}`;
            };
        };
    };

    return 'impossible';
};

console.log( solution(N) );