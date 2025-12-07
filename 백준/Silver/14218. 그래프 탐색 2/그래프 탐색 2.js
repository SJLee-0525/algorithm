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
        };

        this.size++;
    };

    popleft() {
        if (this.size === 0) return null;

        const ret = this.front.val;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        };

        return ret;
    };

    isempty() {
        return this.size === 0;
    };
}; 

const solution = (input) => {
    let idx = 0;

    const [N, M] = input[idx++].trim().split(' ').map(Number);
    const adjL = Array.from({ length: N + 1 }, () => Array());

    for (let m = 0; m < M; m++) {
        const [a, b] = input[idx++].trim().split(' ').map(Number);

        adjL[a].push(b);
        adjL[b].push(a);
    };

    const res = new Array();
    const Q = Number(input[idx++]);

    function bfs() {
        const visited = Array(N + 1).fill(-1);
        visited[1] = 0;

        const queue = new Queue();
        queue.append(1);

        while (!queue.isempty()) {
            const cur = queue.popleft();

            for (const next of adjL[cur]) {
                if (visited[next] >= 0) continue;

                visited[next] = visited[cur] + 1;
                queue.append(next);
            }
        };

        return visited.slice(1, N + 1).join(' ');
    };

    for (let q = 0; q < Q; q++) {
        const [i, j] = input[idx++].trim().split(' ').map(Number);

        adjL[i].push(j);
        adjL[j].push(i);

        res.push( bfs() );
    };

    console.log(res.join('\n'));
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);