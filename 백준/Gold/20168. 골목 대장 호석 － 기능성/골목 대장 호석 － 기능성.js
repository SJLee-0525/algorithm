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

                cur = par;
                par = Math.floor(cur / 2);
            } else break;
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
            }

            left = cur * 2;
            right = left + 1;
        };

        return ret;
    };
};


const solution = (input) => {
    const [N, M, A, B, C] = input[0].trim().split(' ').map(Number);

    const adjL = Array.from({ length: N + 1 }, () => Array());
    for (let m = 1; m <= M; m++) {
        const [a, b, c] = input[m].trim().split(' ').map(Number);

        adjL[a].push([c, b]);
        adjL[b].push([c, a]);
    };

    function dijkstra(start, end, budget) {
        let best = Infinity;

        const visited = Array.from({ length: N + 1 }, () => Array(1001).fill(Infinity));
        visited[start][0] = 0;

        const heap = new Heap();
        heap.heappush([0, 0, start]); // [총비용, 현재까지 최대수치심, 노드]

        while (heap.heapsize()) {
            const [curCost, curMax, cur] = heap.heappop();

            // 예산 초과 || 이미 찾은 정답보다 수치심이 크거나 같음 || 이 상태로 더 싸게 온 적 있음
            if (curCost > budget || curMax >= best || curCost !== visited[cur][curMax]) continue;

            if (cur === end) {
                if (curMax < best) best = curMax;
                continue;
            };

            for (const [nextCost, next] of adjL[cur]) {
                const tempCost = curCost + nextCost;
                if (tempCost > budget) continue;

                const tempMax = curMax < nextCost ? nextCost : curMax;
                if (tempMax >= best) continue;

                if (tempCost < visited[next][tempMax]) {
                    visited[next][tempMax] = tempCost;
                    heap.heappush([tempCost, tempMax, next]);
                };
            };
        };

        return best === Infinity ? -1 : best;
    };


    console.log( dijkstra(A, B, C) );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);