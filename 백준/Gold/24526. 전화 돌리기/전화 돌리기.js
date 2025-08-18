const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    const adjL = Array.from({ length: N + 1 }, () => new Set());
    const counts = Array(N + 1).fill(0);

    for (let m = 1; m < M + 1; m++) {
        const [s, e] = input[m].split(' ').map(Number);
        
        if (!adjL[e].has(s)) { 
            adjL[e].add(s); // 역방향으로 저장
            counts[s]++;    // 역방향 그래프에서의 진입 차수
        }
    }

    console.log( find(adjL, counts, N) );
}

const find = (adjL, counts, N) => {
    let pointer = 0;
    const queue = []

    for (let c = 1; c < N + 1; c++) {
        if (counts[c] === 0) queue.push(c); // 진입차수가 0인 정점들을 큐에 넣음 (절대 사이클에 도달 ㄴㄴ)
    }

    let ret = queue.length; // 초기 정답 세팅

    // Kahn 알고리즘: 진입차수 0인 노드를 제거하면서 연결된 노드의 진입차수를 감소
    while (pointer < queue.length) {
        const cur = queue[pointer++];

        // next의 진입차수를 1 감소
        for (const next of adjL[cur]) {
            counts[next]--;

            // 진입차수가 0이 된다면 이 정점도 안전
            if (counts[next] === 0) {
                queue.push(next);
                ret++; 
            }
        }
    }

    return ret;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);