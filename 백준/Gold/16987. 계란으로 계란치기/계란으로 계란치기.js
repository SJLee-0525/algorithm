const solution = (input) => {
    const N = Number(input[0].trim());
    const eggs = input.slice(1, N + 1).map((egg) => egg.trim().split(' ').map(Number)); // 내구s, 무게w

    let res = -1;

    const func = (lv) => {
        if (lv === N) {
            let temp = eggs.reduce((cnt, egg) => {
                if (egg[0] <= 0) return cnt + 1;
                return cnt;
            }, 0)

            if (res < temp) res = temp;

            return;
        }

        if (eggs[lv][0] <= 0) func(lv + 1);
        else {
            let bool = false;
            const origCurS = eggs[lv][0];

            for (let next = 0; next < N; next++) {
                if (next === lv || eggs[next][0] <= 0) continue;

                bool = true;
                const origNextS = eggs[next][0];

                eggs[lv][0] -= eggs[next][1];
                eggs[next][0] -= eggs[lv][1];

                func(lv + 1);

                eggs[lv][0] = origCurS;
                eggs[next][0] = origNextS;

            }

            if (!bool) func(N);
        }   
    }

    func(0);

    console.log(res);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);