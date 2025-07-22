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
        let par = Math.floor(size / 2);
        while (par !== 0) {
            if (this.heap[cur][0] < this.heap[par][0]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            } else break;

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
        while ((left <= size && this.heap[left][0] < this.heap[cur][0]) 
            || (right <= size && this.heap[right][0] < this.heap[cur][0])) {
            if (right > size || this.heap[left][0] < this.heap[right][0]) {
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

    const [N, M, K] = input[0].split(' ').map(Number);
    input[1].split(' ').forEach((d, n) => {
        heap.heappush([Number(d), n + 1]);
    });

    const res = Array(K).fill(null);
    let resIdx = 0;
    let remain = M;

    let curD = 0, curN = null;
    while (resIdx < K) {
        if (curD === 0 && heap.heapsize() > 0) {
            [curD, curN] = heap.heappop();
        }

        if (curD > 1) { // 푸는 중: 프리즈 필요
            if (remain > 0) {
                res[resIdx++] = 0;
                remain--;
                curD--;
            } else return -1;
        } else if (curD === 1) { // 제출하는 날
            res[resIdx++] = curN;
            curD = 0;
            curN = null;
        } else { // 더이상 할 일 없음, 프리즈로 채움
            if (remain > 0) {
                res[resIdx++] = 0;
                remain--;
            } else return -1;
        }
    }

    return res.join(' ');
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log( solution(input) );