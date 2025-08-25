class Heap {
    constructor() {
        this.heap = [null];
    }

    heapsize() {
        return this.heap.length - 1;
    }

    heappush(val) {
        this.heap.push(val);

        if (this.heapsize() === 1) return;

        let cur = this.heapsize();
        let par = Math.floor(cur / 2);

        while (par > 0) {
            if (this.heap[cur][0] < this.heap[par][0]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            } else break;

            cur = par;
            par = Math.floor(cur / 2);
        }

        return;
    }

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
            }

            left = cur * 2;
            right = left + 1;
        }

        return ret;
    }
}

const DI = [0, 1, 0, -1];
const DJ = [1, 0, -1, 0];

const solution = (input) => {
    const [N, K] = input[0].split(' ').map(Number);

    const arr = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
    const isUsed = Array.from({ length: N }, () => Array(N).fill(false));

    const [S, X, Y] = input[N + 1].split(' ').map(Number);

    for (let s = 0; s < S; s++) {
        if (!oneSecondLater(arr, isUsed, N)) break;
    }
    
    console.log(arr[X - 1][Y - 1])
}

const oneSecondLater = (arr, isUsed, N) => {
    const heap = new Heap();

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] !== 0 && !isUsed[i][j]) {
                for (let k = 0; k < 4; k++) {
                    const mi = i + DI[k], mj = j + DJ[k];

                    if (0 <= mi && mi < N && 0 <= mj && mj < N && arr[mi][mj] === 0) {
                        heap.heappush([arr[i][j], mi, mj]);
                    }
                }

                isUsed[i][j] = true;
            }
        }
    }

    if (heap.heapsize() === 0) return false;

    while (heap.heapsize() > 0) {
        const [size, ci, cj] = heap.heappop();

        if (arr[ci][cj] === 0) arr[ci][cj] = size;
    }

    return true;
}

// --------------------------------------------------------------------------------------

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);