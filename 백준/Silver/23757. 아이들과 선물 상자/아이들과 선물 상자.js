class Heap {
    constructor() {
        this.heap = [null];
    }

    heapsize() {
        return this.heap.length - 1;
    }

    heappush(val) {
        this.heap.push(val);

        let cur = this.heapsize();
        let par = Math.floor(cur / 2);

        while (par > 0) {
            if (this.heap[par] < this.heap[cur]) {
                [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];
            }

            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    heappop() {
        if (this.heapsize() === 0) return null;
        if (this.heapsize() === 1) return this.heap.pop();

        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1, left = 2, right = 3;
        while ((left <= this.heapsize() && this.heap[cur] < this.heap[left])
            || (right <= this.heapsize() && this.heap[cur] < this.heap[right])) {
            if (right > this.heapsize() || this.heap[left] > this.heap[right]) {
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
    const heap = new Heap();

    input[1].trim().split(' ').map(Number).forEach((value) => { heap.heappush(value) });
    const childrens = input[2].trim().split(' ').map(Number);

    for (const children of childrens) {
        if (heap.heapsize() > 0) {
            const remainValue = heap.heappop() - children;

            if (remainValue > 0) heap.heappush(remainValue);
            else if (remainValue < 0) return false;
        } else {
            return false;
        }
    }

    return true;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
    solution(input) ? 1 : 0
);