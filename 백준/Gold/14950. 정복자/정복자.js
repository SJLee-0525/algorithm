class Heap {
    constructor() {
        this.heap = [null];
    };

    heapsize() {
        return this.heap.length - 1;
    };

    heappush(val) {
        this.heap.push(val);

        if (this.heapsize() === 1) return;

        let cur = this.heapsize();
        let par = Math.floor(cur / 2);

        while (par !== 0) {
            if (this.heap[cur][0] < this.heap[par][0]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            } else break;

            cur = par;
            par = Math.floor(cur / 2);
        };
    };

    heappop() {
        if (this.heapsize() === 0) return null;
        else if (this.heapsize() === 1) return this.heap.pop();

        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1, left = 2, right = 3;

        while ((left <= this.heapsize() && this.heap[cur][0] > this.heap[left][0]) 
        || (right <= this.heapsize() && this.heap[cur][0] > this.heap[right][0])) {
            if (right > this.heapsize() || this.heap[left][0] < this.heap[right][0]) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            } else {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            };

            left = cur * 2;
            right = left + 1;
        };

        return ret;
    };
};


const solution = (input) => {
    const [N, M, T] = input[0].trim().split(' ').map(Number);

    const parents = Array.from({ length: N + 1 }, (_, i) => i);
    
    function find(x) {
        if (x !== parents[x]) return find(parents[x]);

        return x
    };

    function union(x, y) {
        x = find(x);
        y = find(y);
        [x, y] = [x, y].sort((a, b) => a - b);

        if (x !== y) {
            parents[y] = x;
            return true;
        }

        return false;
    };

    const heap = new Heap();

    for (let m = 1; m <= M; m++) {
        const [A, B, C] = input[m].trim().split(' ').map(Number);
        heap.heappush([C, A, B]);
    };
    
    let cost = 0, addCnt = 0;

    while (heap.heapsize()) {
        const [C, A, B] = heap.heappop();

        if (union(A, B)) {
            cost += C + (T * addCnt++);
        };
    };

    console.log(cost);
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);