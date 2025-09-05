class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    } 
}

class Queue {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return;
    }

    popleft() {
        if (this.size === 0) return null;

        const ret = this.head.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        }

        return ret;
    }

    isempty() {
        return this.size === 0;
    }
}

const solution = ([N, K]) => {
    const visited = Array(N + 1).fill(0);
    visited[0] = 1;

    const queue = new Queue();
    queue.append(0);

    while (!queue.isempty()) {
        const cur = queue.popleft();

        if (cur === N) return true;

        if (visited[cur] <= K) {
            const step = cur + 1;
            if (step <= N && !visited[step]) {
                queue.append(step);
                visited[step] = visited[cur] + 1;
            }
    
            const jump = cur + Math.floor(cur / 2);
            if (jump <= N && !visited[jump]) {
                queue.append(jump);
                visited[jump] = visited[cur] + 1;
            }
        }
    }

    return false;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(
    solution(input) ? 'minigimbob' : 'water'
);