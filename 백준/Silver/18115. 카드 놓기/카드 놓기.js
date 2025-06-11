class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.start = null;
        this.end = null;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            const cachedEnd = this.end;
            cachedEnd.next = node;
            node.prev = cachedEnd;
            this.end = node;
        }

        this.size++
        return;
    }

    appendLeft(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            const cachedStart = this.start;
            cachedStart.prev = node;
            node.next = cachedStart;
            this.start = node;
        }

        this.size++;
    }

    appendLeftSecond(val) {
        if (this.size === 0) return null;

        const node = new Node(val);

        if (this.size === 1) {
            this.start.next = node;
            node.prev = this.start
            this.end = node;
        } else {
            const first = this.start;
            const second = this.start.next;

            first.next = node;
            node.prev = first;

            node.next = second;
            second.prev = node;
        }

        this.size++;
    }

    print() {
        const res = []

        let cur = this.start;
        while (cur !== null) {
            res.push(cur.val);
            cur = cur.next;
        }

        console.log(res.join(' '));
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const prompts = input[1].split(' ').reverse().map(Number);

const queue = new Deque();

for (let p = 0; p < prompts.length; p++) {
    switch (prompts[p]) {
        case 1: {
            queue.appendLeft(p + 1);
            break;
        }
        case 2: {
            queue.appendLeftSecond(p + 1);
            break;
        }
        default: {
            queue.append(p + 1);
        }
    }
}

queue.print();