class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.start = null;
        this.end = null;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            this.end.next = node;
            node.prev = this.end;
            this.end = node;
        }

        this.size++;
        return;
    }

    popleft() {
        if (this.size === 0) return null;

        const val = this.start.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.start = this.start.next;
            this.start.prev = null;
            this.size--;
        }

        return val;
    }

    isempty() {
        return this.size === 0;
    }
}

const solution = (input) => {
    let idx = 0;

    const [N, M] = input[idx++].split(' ').map(Number);
    const adjL = Array.from({ length: N + 1}, () => Array());

    for (let _ = 0; _ < M; _++) {
        const [A, B] = input[idx++].split(' ').map(Number);

        adjL[A].push(B);
        adjL[B].push(A);
    }

    for (let n = 0; n < N + 1; n++) {
        if (adjL[n].length === 0) continue;

        adjL[n].sort((a, b) => a - b);
    }

    const [S, E] = input[idx].split(' ').map(Number);

    const [go, goPath] = goBfs(S, E, adjL, N);
    const back = backBfs(E, S, adjL, N, goPath);

    console.log(go + back);
}

const goBfs = (start, end, adjL, N) => {
    const queue = new Queue();
    queue.append([start, [start], 0]);

    const visited = Array(N + 1).fill(-1);
    visited[start] = 0;
    
    let minDist = Infinity;
    const validPaths = [];

    while (!queue.isempty()) {
        const [now, path, dist] = queue.popleft();
        
        // 이미 최소 거리보다 긴 경우 스킵
        if (dist > minDist) continue;

        if (now === end) {
            if (dist < minDist) {
                minDist = dist;
                validPaths.length = 0;
                validPaths.push([...path]);
            } else if (dist === minDist) {
                validPaths.push([...path]);
            }
            continue;
        }

        for (const next of adjL[now]) {
            // 이미 방문했고 더 짧은 거리로 방문한 경우 스킵
            if (visited[next] !== -1 && visited[next] < dist + 1) continue;
            
            // 현재 경로에 이미 포함된 경우 스킵 (사이클 방지)
            if (path.includes(next)) continue;

            visited[next] = dist + 1;
            queue.append([next, [...path, next], dist + 1]);
        }
    }

    // 사전순으로 가장 먼저 오는 경로 선택
    validPaths.sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }

        return a.length - b.length;
    });

    return [minDist, validPaths[0].slice(1, -1)]; 
}

const backBfs = (start, end, adjL, N, goPath) => {
    const queue = new Queue();
    queue.append([start, 0]);

    const visited = Array(N + 1).fill(-1);
    goPath.forEach((p) => { visited[p] = Infinity; });
    visited[start] = 0;
    visited[end] = -1; 

    while (!queue.isempty()) {
        const [now, dist] = queue.popleft();

        if (now === end) {
            return dist;
        }

        for (const next of adjL[now]) {
            if (visited[next] !== -1) continue;

            visited[next] = dist + 1;
            queue.append([next, dist + 1]);
        }
    }

    return -1;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);