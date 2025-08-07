const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = [];

    const [N, M] = input[0].split(' ').map(Number);
    
    const adjL = [
        Array(N + 1).fill(0),
        ...input.slice(1, N + 1).map((line) => [0, ...line.split(' ').map(Number)])
    ];

    for (let mid = 1; mid < N + 1; mid++) {
        for (let start = 1; start < N + 1; start++) {
            for (let end = 1; end < N + 1; end++) {
                const stopover = adjL[start][mid] + adjL[mid][end];
                if (adjL[start][end] > stopover) adjL[start][end] = stopover;
            }
        }
    }

    for (let m = 1; m <= M; m++) {
        const [start, end, limit] = input[N + m].split(' ').map(Number);
        res.push(adjL[start][end] > limit ? 'Stay here' : 'Enjoy other party');
    }

    console.log(res.join('\n'));
}

solution(input);

// class Heap {
//     constructor() {
//         this.heap = [null];
//     }

//     heapsize() {
//         return this.heap.length - 1;
//     }

//     heappush(val) {
//         this.heap.push(val);

//         const size = this.heapsize();

//         if (size === 1) return;

//         let cur = size;
//         let par = Math.floor(cur / 2);

//         while (par > 0) {
//             if (this.heap[cur][0] < this.heap[par][0]) {
//                 [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
//             } else break;

//             cur = par;
//             par = Math.floor(cur / 2);
//         }

//         return;
//     }

//     heappop() {
//         if (this.heapsize() === 0) return null;
//         else if (this.heapsize() === 1) return this.heap.pop();

//         const val = this.heap[1];
//         this.heap[1] = this.heap.pop();

//         const size = this.heapsize();
//         let cur = 1, left = 2, right = 3;
//         while ((left <= size && this.heap[cur][0] < this.heap[left][0]) 
//             || (right <= size && this.heap[cur][0] < this.heap[right][0])) {
//             if (right > size || this.heap[left][0] < this.heap[right][0]) {
//                 [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
//                 cur = left;
//             } else {
//                 [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
//                 cur = right;
//             }

//             left = cur * 2;
//             right = left + 1;
//         }

//         return val;
//     }
// }

// const dijkstra = (start, end, adjL, N) => {
//     const heap = new Heap();
//     heap.heappush([0, start]);

//     const visited = Array(N + 1).fill(Infinity);
//     visited[start] = 0;

//     while (heap.heapsize() > 0) {
//         const [curDist, cur] = heap.heappop();

//         if (visited[cur] < curDist) continue;

//         for (const [next, nextDist] of adjL[cur]) {
//             const tempTotalDist = curDist + nextDist;

//             if (visited[next] >= tempTotalDist) {
//                 visited[next] = tempTotalDist;
//                 heap.heappush([tempTotalDist, next]);
//             }
//         }
//     }

//     return visited[end];
// }

// const solution = (input) => {
//     let idx = 0;
//     const res = [];

//     const [N, M] = input[idx++].split(' ').map(Number);
//     const adjL = Array.from({ length: N + 1 }, () => Array());

//     for (let start = 1; start < N + 1; start++) {
//         input[idx++].split(' ').forEach((d, next) => {
//             const dist = Number(d);
//             if (dist > 0) adjL[start].push([next + 1, dist]);
//         })
//     }

//     for (let _ = 0; _ < M; _++) {
//         const [start, end, time] = input[idx++].split(' ').map(Number);
//         res.push(dijkstra(start, end, adjL, N) > time ? 'Stay here' : 'Enjoy other party');
//     }

//     console.log(res.join('\n'));
// }

