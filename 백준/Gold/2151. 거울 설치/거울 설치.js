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
            if (this.heap[cur][0] > this.heap[par][0]) {
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
        while ((left < size && this.heap[cur][0] > this.heap[left][0]) 
            || (right < size && this.heap[cur][0] > this.heap[right][0])) {
            if (right >= size || this.heap[left][0] < this.heap[right][0]) {
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


const dijkstra = (si, sj, N, room) => {
    let ret = 2501; 

    const visited = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(4).fill(2501)));

    const heap = new Heap();

    for (let k = 0; k < 4; k++) {
        visited[si][sj][k] = -1;

        const ti = si + DI[k], tj = sj + DJ[k];

        if (0 <= ti && ti < N && 0 <= tj && tj < N && room[ti][tj] !== '*') {
            visited[ti][tj][k] = 0;
            heap.heappush([0, ti, tj, k]);
        }
    }

    while (heap.heapsize() > 0) {
        const [c, i, j, d] = heap.heappop();

        if (visited[i][j][d] < c) continue;

        if (room[i][j] === '#' && ret > c) ret = c;

        const ni = i + DI[d], nj = j + DJ[d];

        if (0 <= ni && ni < N && 0 <= nj && nj < N 
            && room[ni][nj] !== '*' && visited[ni][nj][d] > c) {
            visited[ni][nj][d] = c;
            heap.heappush([c, ni, nj, d]);
        }

        if (room[i][j] === '!') {
            for (let k = 0; k < 2; k++) {
                const md = (d + (1 + (2 * k))) % 4;
                const mi = i + DI[md], mj = j + DJ[md];

                if (0 <= mi && mi < N && 0 <= mj && mj < N 
                    && room[mi][mj] !== '*' && visited[mi][mj][md] > c + 1) {
                    visited[mi][mj][md] = c + 1;
                    heap.heappush([c + 1, mi, mj, md]);
                }
            }
        }
    }

    return ret;
}


const solution = (input) => {
    let res;

    const N = Number(input[0]);
    const room = input.slice(1, N + 1).map((l) => l.split(''));

    for (let i = 0; i < N; i++) {
        let check = false;

        for (let j = 0; j < N; j++) {
            if (room[i][j] === '#') {
                res = dijkstra(i, j, N, room);
                check = true;
                break;
            }
        }

        if (check) break;
    }

    console.log(res);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);