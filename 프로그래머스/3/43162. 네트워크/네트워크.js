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
        return this.size <= 0;
    };
};

function solution(n, computers) {
    let ans = 0;
    const visited = Array(n).fill(0);
    
    const bfs = (s) => {        
        ans++;
        visited[s] = 1;
        
        const queue = new Queue();
        queue.append(s);
        
        while (!queue.isempty()) {
            const c = queue.popleft();
            
            for (let m = 0; m < n; m++) {
                if (c === m) continue;
                
                if (computers[c][m] && !visited[m]) {
                    visited[m] = 1;
                    queue.append(m);
                };
            };
        };
        
        return;
    };
    
    for (let start = 0; start < n; start++) {
        if (!visited[start]) bfs(start);
    }; 

    return ans;
};

