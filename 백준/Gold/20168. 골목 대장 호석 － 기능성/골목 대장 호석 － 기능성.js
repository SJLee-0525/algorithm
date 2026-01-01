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
        let maxCost = Infinity;

        const visited = Array(N + 1).fill(Infinity);
        visited[start] = 0;

        const heap = new Heap();
        heap.heappush([0, 0, start]);

        while (heap.heapsize()) {
            const [curCost, curMaxCost, cur] = heap.heappop();
            if (cur === end && maxCost > curMaxCost) maxCost = curMaxCost;

            for (const [nextCost, next] of adjL[cur]) {
                const tempCost = curCost + nextCost;
                if (tempCost > budget || tempCost > visited[next]) continue;

                let tempMaxCost;
                if (curMaxCost < nextCost) tempMaxCost = nextCost;
                else tempMaxCost = curMaxCost;

                visited[next] = tempCost;
                heap.heappush([tempCost, tempMaxCost, next]);
            };
        };

        return visited[end] === Infinity ? -1 : maxCost;
    };

    console.log( dijkstra(A, B, C) );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);