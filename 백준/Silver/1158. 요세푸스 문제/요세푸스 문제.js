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
        const node = new Node(val)

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            const cachedEnd = this.end;
            cachedEnd.next = node;
            node.prev = cachedEnd;
            this.end = node;
        }
        
        this.size++;
    }

    popLeft() {
        if (this.size === 0) return null;

        const val = this.start.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.start = this.start.next;
            this.start.prev = null;
            this.size--;
        }
        
        return val;
    }

    moveRight() {
        const start = this.start;
        
        this.start = this.start.next;
        this.start.prev = null;
        start.next = null;
        
        start.prev = this.end;
        this.end.next = start;
        this.end = start
    }

    isEmpty() {
        return this.size === 0;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const [N, K] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const queue = new Deque();

Array.from({length: N}, (_, i) => i + 1).forEach((p) => {
    queue.append(p);
})

const res = [];
let c = 1;

while (true) {
    if (queue.size === 1) {
        res.push(queue.popLeft());
        break;
    }

    if (c % K !== 0) {
        queue.moveRight();
        c++;
    } else {
        res.push(queue.popLeft());
        c = 1;
    }
}

console.log("<" + res.join(', ') + ">");