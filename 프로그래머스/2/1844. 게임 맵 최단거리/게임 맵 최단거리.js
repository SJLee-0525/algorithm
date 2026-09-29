class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.init();
    };
    
    init() {
        this.size = 0;
        this.front = null;
        this.tail = null;
    };
    
    append(val) {
        const node = new Node(val);
        
        if (this.size === 0) {
            this.front = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        };
        
        this.size++;
        return;
    };
    
    popleft() {
        if (this.size === 0) return null;
        
        const ret = this.front.val;
        
        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        };
        
        return ret;
    };
    
    isempty() {
        return this.size === 0;
    };
};

function solution(maps) {
    const N = maps.length, M = maps[0].length;
    const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];
    
    const bfs = () => {
        const visited = Array.from({ length: N }, () => Array(M).fill(0));
        visited[0][0] = 1;
        
        const queue = new Queue();
        queue.append([0, 0]);
        
        while (!queue.isempty()) {
            const [ci, cj] = queue.popleft();
            for (let k = 0; k < 4; k++) {
                const ni = ci + DI[k], nj = cj + DJ[k];
                if (ni < 0 || N <= ni || nj < 0 || M <= nj || maps[ni][nj] === 0 || visited[ni][nj] > 0) continue;
                visited[ni][nj] = visited[ci][cj] + 1;
                queue.append([ni, nj]);
            };
        };
        
        if (visited[N - 1][M - 1] === 0) return -1;
        return visited[N - 1][M - 1];
    };
    
    return bfs();
}