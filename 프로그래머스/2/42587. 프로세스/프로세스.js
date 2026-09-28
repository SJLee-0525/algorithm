class Heap {
    constructor() {
        this.heap = [null];
    };
    
    heappush(val) {
        this.heap.push(val);
        
        if (this.heap.length === 2) return;
        
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);
        
        while (par > 0) {
            if (this.heap[cur] > this.heap[par]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
                cur = par;
                par = Math.floor(cur / 2);
            } else break;
        };
    };
    
    heappop() {
        if (this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        
        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let cur = 1, left = 2, right = 3;
        
        while ((left < this.heap.length && this.heap[cur] < this.heap[left])
              || (right < this.heap.length && this.heap[cur] < this.heap[right])) {
            if (right >= this.heap.length || this.heap[left] > this.heap[right]) {
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
    
    heapsize() {
        return this.heap.length - 1;
    };
};

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
    
    peek() {
        if (this.size === 0) return null;
        return this.front.val;
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

function solution(priorities, location) {    
    const heap = new Heap();
    const queue = new Queue();
    
    for (let i = 0; i < priorities.length; i++) {
        heap.heappush(priorities[i]);
        queue.append([priorities[i], i]);
    };
    
    const seq = [null];
    
    function loop() {
        const priority = heap.heappop();
        
        while (!queue.isempty() && queue.peek()[0] < priority) queue.append(queue.popleft());
        
        const tar = queue.popleft();
        seq.push(tar[1]);
    };
    
    while (seq[seq.length - 1] !== location) loop();
    
    return seq.length - 1;
};