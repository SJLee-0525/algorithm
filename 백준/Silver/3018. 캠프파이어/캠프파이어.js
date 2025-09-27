const solution = (input) => {
    const N = Number(input[0].trim());
    const E = Number(input[1].trim());

    if (N === 1) return '1';

    const people = Array.from({ length: N + 1 }, () => new Set());
    let song = 1;

    function checkSY(arr) {
        for (let a = 0; a < arr.length; a++) {
            if (arr[a] === 1) return true;
        };

        return false;
    };

    for (let e = 2; e < E + 2; e++) {
        const [_, ...list] = input[e].split(' ').map(Number);

        if (checkSY(list)) {
            list.forEach((p) => { people[p].add(song) });

            song++;
        } else {
            const share = new Set();

            list.forEach((p) => {
                people[p].forEach((s) => { share.add(s) });
            });

            list.forEach((p) => {
                share.forEach((s) => { people[p].add(s) });
            });
        };
    };

    const res = [1];

    for (let p = 2; p < N + 1; p++) {
        if (people[p].size === people[1].size) res.push(p);
    };

    return res.join('\n');
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
    solution(input)
);