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
    const N = Number(input[0].trim());
    const [R1, C1, R2, C2] = input[1].trim().split(' ').map(Number);

    const DI = [-2, -2, 0, 0, 2, 2], DJ = [-1, 1, -2, 2, -1, 1];

    function bfs(sr, sc) {
        const visited = Array.from({ length: N }, () => Array(N).fill(0));
        visited[sr][sc] = 1;

        const queue = new Queue();
        queue.append([sr, sc]);

        while (!queue.isempty()) {
            const [cr, cc] = queue.popleft();

            for (let k = 0; k < 6; k++) {
                const mr = cr + DI[k], mc = cc + DJ[k];
                
                if (0 <= mr && mr < N && 0 <= mc && mc < N && !visited[mr][mc]) {
                    if (mr === R2 && mc === C2) return visited[cr][cc];

                    visited[mr][mc] = visited[cr][cc] + 1;
                    queue.append([mr, mc]);
                };
            };
        }

        return -1;
    };

    console.log( bfs(R1, C1) );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);