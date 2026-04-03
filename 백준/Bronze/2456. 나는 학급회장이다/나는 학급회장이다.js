const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const scores = Array.from({ length: 3 }, () => [0, Array(4).fill(0)]);

    for (let n = 1; n <= N; n++) {
        input[n].trim().split(' ').map(Number).forEach((s, i) => {
            scores[i][0] += s;
            scores[i][1][s]++;
        });
    };

    const maxScore = Math.max(...scores.map(s => s[0]));
    const candidates = scores.map((s, idx) => s[0] === maxScore ? idx : -1).filter(idx => idx !== -1);

    if (candidates.length === 1) console.log(`${candidates[0] + 1} ${maxScore}`);
    else {
        // 3점을 더 많이 받은 후보
        const max3 = Math.max(...candidates.map(idx => scores[idx][1][3]));
        const filtered3 = candidates.filter(idx => scores[idx][1][3] === max3);
        
        if (filtered3.length === 1) console.log(`${filtered3[0] + 1} ${maxScore}`);
        else {
            // 2점을 더 많이 받은 후보
            const max2 = Math.max(...filtered3.map(idx => scores[idx][1][2]));
            const filtered2 = filtered3.filter(idx => scores[idx][1][2] === max2);
            
            if (filtered2.length === 1) console.log(`${filtered2[0] + 1} ${maxScore}`);
            else console.log(`0 ${maxScore}`); // 회장 x
        }
    }

};

solution(input);
