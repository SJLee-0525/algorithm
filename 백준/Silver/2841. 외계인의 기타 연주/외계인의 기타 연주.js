const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let res = 0;

    const [N, _P] = input[0].trim().split(' ').map(Number);
    const strings = Array.from({ length: 7 }, () => Array());

    for (let n = 1; n <= N; n++) {
        const [str, pret] = input[n].trim().split(' ').map(Number);
        
        if (strings[str].length === 0) {
            strings[str].push(pret);
            res++;
        } else {
            if (strings[str][strings[str].length - 1] === pret) continue;
            else if (strings[str][strings[str].length - 1] < pret) {
                strings[str].push(pret);
                res++;
            } else {
                while (strings[str].length && strings[str][strings[str].length - 1] > pret) {
                    strings[str].pop();
                    res++;
                }

                if (strings[str].length && strings[str][strings[str].length - 1] === pret) continue;
                else {
                    strings[str].push(pret);
                    res++;
                }
            }
        }
    }

    console.log(res);
}

solution(input);