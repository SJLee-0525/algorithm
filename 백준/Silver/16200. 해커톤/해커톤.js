const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const students = input[1].split(' ').map(Number).sort((a, b) => a - b);

    let res = 0;
    let teamSize = 0;
    let limit = Infinity;

    for (const student of students) {
        limit = Math.min(limit, student);
        teamSize++;

        if (teamSize > limit) {
            res++;
            teamSize = 1;
            limit = student;
        }
    }

    if (teamSize > 0) res++;

    console.log(res);
};

solution(input);