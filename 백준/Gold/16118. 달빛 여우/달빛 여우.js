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

        const size = this.heapsize();
        let cur = 1, left = 2, right = 3;
        while ((left <= size && this.heap[cur][0] > this.heap[left][0]) 
            || (right <= size && this.heap[cur][0] > this.heap[right][0])) {
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
    const [N, M] = input[0].split(' ').map(Number);
    const adjL = Array.from({ length: N + 1 }, () => Array());

    for (let m = 1; m < M + 1; m++) {
        const [a, b, d] = input[m].split(' ').map(Number);
        adjL[a].push([b, d * 10]);
        adjL[b].push([a, d * 10]);
    }

    const foxRes = foxDijkstra(adjL, N);
    const wolfRes = wolfDijkstra(adjL, N);

    // console.log(foxRes);
    // console.log(wolfRes);

    let res = 0;
    for (let r = 1; r < N + 1; r++) if (foxRes[r] < wolfRes[r]) res++;
    console.log(res);
}

const foxDijkstra = (adjL, N) => {
    const heap = new Heap();
    heap.heappush([0, 1]);

    const dist = Array(N + 1).fill(Infinity);
    dist[1] = 0;

    while (heap.heapsize() > 0) {
        const [curDist, cur] = heap.heappop();

        if (dist[cur] < curDist) continue;

        for (const [next, nextDist] of adjL[cur]) {
            const tempDist = curDist + nextDist;
            if (dist[next] > tempDist) {
                dist[next] = tempDist;
                heap.heappush([tempDist, next]);
            }
        }
    }

    return dist;
}

const wolfDijkstra = (adjL, N) => {
    const heap = new Heap();
    heap.heappush([0, 1, true]);

    const dist = Array.from({ length: 2 }, () => Array(N + 1).fill(Infinity));
    dist[1][1] = 0; // 출발 노드(1번)로 다시 돌아와 출발하는 게 더 빠른 경우를 방지하기 위해, dist[0][1] 0으로 초기화 ㄴㄴ

    while (heap.heapsize() > 0) {
        const [curDist, cur, isFaster] = heap.heappop();

        if (dist[isFaster ? 1 : 0][cur] < curDist) continue;

        for (const [next, nextDist] of adjL[cur]) {
            const tempDist = curDist + (isFaster ? nextDist / 2 : nextDist * 2);
            if (dist[isFaster ? 0 : 1][next] > tempDist) {
                dist[isFaster ? 0 : 1][next] = tempDist;
                heap.heappush([tempDist, next, !isFaster]);
            }
        }
    }

    return Array(N + 1).fill(null).map((_, i) => Math.min(dist[0][i], dist[1][i]));
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);