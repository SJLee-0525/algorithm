const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, X] = input[0].trim().split(' ').map(Number);

    const duration = [0, ...input[1].trim().split(' ').map(Number)];
    for (let d = 1; d <= N; d++) duration[d] += duration[d - 1];

    let maxVisitor = -1, cnt = 0;

    for (let s = 0; s <= N - X; s++) {
        const curVisitor = duration[s + X] - duration[s];
        if (maxVisitor > curVisitor) continue;

        if (maxVisitor < curVisitor) {
            maxVisitor = curVisitor;
            cnt = 1;
        } else cnt++;
    };

    console.log(maxVisitor ? `${maxVisitor}\n${cnt}` : 'SAD');
};

solution(input);