class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class Queue {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.cur = null;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            node.prev = node;
            this.cur = node;
        } else {
            const tail = this.cur.prev;

            tail.next = node;
            node.prev = tail;

            this.cur.prev = node;
        }

        this.size++;
    }

    connect() {
        if (this.size === 0) return null;

        const start = this.cur;
        const last = this.cur.prev;

        start.prev = last;
        last.next = start;
    }

    popleft() {
        if (this.size === 0) return null;

        const val = this.cur.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.cur.prev.next = this.cur.next;
            this.cur.next.prev = this.cur.prev;
            this.cur = this.cur.next;
            this.size--;
        }

        return val;
    }

    find(tar) {
        let leftCur = this.cur, left = 0;
        let rightCur = this.cur, right = 0;

        while (leftCur.val !== tar) {
            leftCur = leftCur.prev;
            left++;
        }

        while (rightCur.val !== tar) {
            rightCur = rightCur.next;
            right++
        }

        this.cur = rightCur;
        this.popleft();

        return Math.min(left, right);
    }
}


// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, _] = input[0].split(' ').map(Number);
    const TARGETS = input[1].split(' ').map(Number);
    
    const queue = new Queue();

    for (let n = 1; n < N + 1; n++) queue.append(n);
    queue.connect();
    
    let res = 0;
    TARGETS.forEach((tar) => {
        res += queue.find(tar);
    })
    
    console.log(res);
}

solution(input);
