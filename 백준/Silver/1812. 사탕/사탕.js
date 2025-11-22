const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = ([N, ...arr]) => {
    let cal = 0;
    const students = [];

    for (let i = 0; i < N; i++) cal += i % 2 ? -arr[i] : arr[i];
    students.push(cal / 2);

    for (let i = 0; i < N - 1; i++) students.push(arr[i] - students[i]);

    console.log(students.join("\n"));
};

solution(input);