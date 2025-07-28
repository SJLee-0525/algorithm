const solution = (input) => {
    const N = Number(input[0]);
    const dominos = input.slice(1, N + 1).map((l) => l.split('').map((d) => convert(d)));

    console.log( game(N, dominos).join('\n') );
}

const convert = (d) => {
    switch (d) {
        case 'A':
            return -1;
        
        case 'B':
            return -2;
        
        case 'C':
            return -3;

        case 'D':
            return -4;

        case 'E':
            return -5;

        case 'F':
            return -6;

        case 'G':
            return -7;
        
        case 'H':
            return -8;
        
        case 'I':
            return -9;
        
        default:
            return Number(d);
    }
}

const game = (N, dominos) => {
    let minScore = 1000001;
    let maxScore = -1000001;

    const path = [];
    const used = Array(N).fill(false);

    const f = (lv) => {
        if (lv === N) {
            const tempScore = findCycle();

            if (minScore > tempScore) minScore = tempScore;
            if (maxScore < tempScore) maxScore = tempScore;
            return
        }

        for (let n = 0; n < N; n++) {
            if (used[n]) continue;

            used[n] = true;
            path.push(n);
            f(lv + 1);
            used[n] = false;
            path.pop();
        }
    }

    const findCycle = () => {
        let cycle = 0;
        let score = 1;

        const visited = Array(path.length).fill(false);

        const f = (now, tempScore) => {
            if (visited[now]) {
                cycle++;
                score *= tempScore;
                return;
            }

            visited[now] = true;
            f(path[now], tempScore * dominos[now][path[now]]);
        } 

        for (let i = 0; i < path.length; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            f(path[i], dominos[i][path[i]]);
        }

        return cycle % 2 === 0 ? -score : score;
    }

    f(0);

    return [minScore, maxScore];
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);