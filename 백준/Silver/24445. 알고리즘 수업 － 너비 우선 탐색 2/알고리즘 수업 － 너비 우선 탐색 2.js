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
        this.end = null;
    };

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.front = node;
            this.end = node;
        } else {
            this.end.next = node;
            this.end = node;
        };

        this.size++;
        return;
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

    isEmpty() {
        return this.size === 0;
    };
};


const solution = (input) => {
    const [N, M, R] = input[0].trim().split(' ').map(Number);

    const adjL = Array.from({ length: N + 1 }, () => Array());
    const visited = Array(N + 1).fill(0);

    for (let m = 1; m <= M; m++) {
        const [a, b] = input[m].trim().split(' ').map(Number);

        adjL[a].push(b);
        adjL[b].push(a);
    };

    adjL.forEach((adj) => { adj.sort((a, b) => b - a) });

    function bfs(start) {
        let seq = 1;
        visited[start] = seq++;

        const queue = new Queue();
        queue.append(start);

        while (!queue.isEmpty()) {
            const cur = queue.popleft();

            for (const next of adjL[cur]) {
                if (visited[next] !== 0) continue;

                visited[next] = seq++;
                queue.append(next);
            };
        };

        return;
    };

    bfs(R);

    console.log( visited.slice(1, visited.length).join('\n') );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);