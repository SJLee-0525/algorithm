class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.front = null;
        this.tail = null;
    }

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
        return;
    }

    popleft() {
        if (this.size === 0) return null;

        const ret = this.front.val;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        }

        return ret;
    }

    isempty() {
        return this.size === 0;
    }
}

const solution = (input) => {
    const N = Number(input[0].trim());

    const waiting = new Queue();
    const res = Array.from({ length: 3 }, () => new Array());

    for (let n = 1; n <= N; n++) {
        const [cmd, ...info] = input[n].trim().split(' ').map(Number);

        if (cmd === 1) waiting.append(info);
        else {
            const [student, favorite] = waiting.popleft();

            if (favorite === info[0]) res[0].push(student);
            else res[1].push(student);
        }
    }

    while (!waiting.isempty()) res[2].push( waiting.popleft()[0] );

    res.forEach((r) => { 
        if (r.length) {
            r.sort((a, b) => a - b);
            console.log(r.join(' '));
        } else console.log('None');
    });
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);