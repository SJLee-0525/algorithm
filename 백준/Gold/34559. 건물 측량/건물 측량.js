class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};


class Queue {
    constructor() {
        this.init();
    };

    init() {
        this.size = 0;
        this.front = null;
        this.tail = null;
    };

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.front = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    };

    popleft() {
        if (this.size === 0) return null;

        const ret = this.front.val;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        }

        return ret;
    };

    isempty() {
        return this.size === 0;
    };
};


const solution = (input) => {
    const res = Array();
    
    const [N, M] = input[0].trim().split(' ').map(Number);
    const ground = input.slice(1, N + 1).map((l) => l.trim().split('').map(Number));

    function init() {
        // bfs로 건물과 땅 구분
        const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

        const queue = new Queue();
        queue.append([0, 0]);

        const visited = Array.from({ length: N }, () => Array(M).fill(false));
        visited[0][0] = true;

        while (!queue.isempty()) {
            const [r, c] = queue.popleft();

            for (let k = 0; k < 4; k++) {
                const nr = r + DI[k], nc = c + DJ[k];

                if (0 <= nr && nr < N && 0 <= nc && nc < M && ground[nr][nc] === 0 && !visited[nr][nc]) {
                    queue.append([nr, nc]);
                    visited[nr][nc] = true;
                };
            };
        };

        // 건물 표시
        for (let n = 0; n < N; n++) {
            for (let m = 0; m < M; m++) {
                if (!visited[n][m]) ground[n][m] = 1;
            };
        };

        // 누적합 
        for (let j = 1; j < M; j++) ground[0][j] += ground[0][j - 1];

        for (let i = 1; i < N; i++) ground[i][0] += ground[i - 1][0];

        for (let i = 1; i < N; i++) {
            for (let j = 1; j < M; j++) {
                ground[i][j] += ground[i - 1][j] + ground[i][j - 1] - ground[i - 1][j - 1];
            };
        };
    };

    init();

    function calPrefixSum(r1, c1, r2, c2) {
        const A = ground[r2][c2];
        const B = r1 > 0 ? ground[r1 - 1][c2] : 0;
        const C = c1 > 0 ? ground[r2][c1 - 1] : 0;
        const D = (r1 > 0 && c1 > 0) ? ground[r1 - 1][c1 - 1] : 0;
        
        return A - B - C + D;
    };
    
    const Q = Number(input[N + 1].trim());
    for (let q = 0; q < Q; q++) {
        const [r1, c1, r2, c2] = input[N + 2 + q].trim().split(' ').map((e) => Number(e) - 1);

        const temp = calPrefixSum(r1, c1, r2, c2);
        if (!temp) res.push('Yes');
        else res.push(`No ${temp}`);
    };

    console.log(res.join('\n'));
};

/////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
