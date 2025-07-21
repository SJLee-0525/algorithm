class Heap {
    constructor() {
        this.heap = [null];
    }

    heapsize() {
        return this.heap.length - 1;
    }

    heappush(val) {
        this.heap.push(val);

        const size = this.heapsize();
        if (size === 1) return;

        let cur = size;
        let par = Math.floor(cur / 2);

        while (par !== 0) {
            if (this.heap[cur] < this.heap[par]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            } else return;

            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    heappop() {
        if (this.heapsize() === 0) return null;
        else if (this.heapsize() === 1) return this.heap.pop();

        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();

        const size = this.heapsize();

        let cur = 1, left = 2, right = 3;
        while ((left <= size && this.heap[cur] > this.heap[left]) || (right <= size && this.heap[cur] > this.heap[right])) {
            if (right > size || this.heap[left] < this.heap[right]) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            } else {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            }

            left = cur * 2;
            right = left + 1;
        }

        return ret;
    }
}


const solution = (input) => {
    const N = Number(input[0]);
    const heap = new Heap();

    for (let n = 1; n <= N; n++) {
        const [p, ...times] = input[n].split(' ').map(Number);
        heap.heappush( times.reduce((a, c) => a += c, 0) );
    }

    let res = 0, cur = 0;
    while (heap.heapsize() > 0) {
        cur += heap.heappop();
        res += cur;
    }

    console.log(res);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);