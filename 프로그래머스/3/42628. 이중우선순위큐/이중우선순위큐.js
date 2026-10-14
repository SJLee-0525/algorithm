// 기본: 최대힙
class Heap {
    constructor() {
        this.heap = [null];
    };
    
    heappush(val) {
        this.heap.push(val);
        
        if (this.heap.length <= 2) return;
        
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);
        
        while (par > 0) {
            if (this.heap[cur] > this.heap[par]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
                
                cur = par;
                par = Math.floor(cur / 2);
            } else break;  
        };
        
        return;
    };
    
    heappop() {
        if (this.heap.length <= 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        
        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let cur = 1, left = 2, right = 3;
        
        while ((left < this.heap.length && this.heap[cur] < this.heap[left])
              || right < this.heap.length && this.heap[cur] < this.heap[right]) {
            if (right >= this.heap.length || this.heap[right] <= this.heap[left]) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            } else {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            };
            
            left = cur * 2;
            right = left + 1;
        };
        
        return ret;
    };
    
    isEmpty() {
        return this.heap.length <= 1;
    };
};

class DualPriorityQueue {
    constructor() {
        this.maxHeap = new Heap();
        this.minHeap = new Heap();
        this.store = new Object();
        this.length = 0;
    };
    
    pushToDualPQ(val) {
        if (!this.store[val]) this.store[val] = 1;
        else this.store[val]++;
        
        this.maxHeap.heappush(val);
        this.minHeap.heappush(-val);
        
        this.length++;
    };
    
    maxHeapPop() {
        let val = this.maxHeap.heappop();
        
        while (!this.maxHeap.isEmpty() && !this.store[val]) val = this.maxHeap.heappop();
        
        if (val === null) return null;

        this.store[val]--;
        if (this.store[val] === 0) delete this.store[val];
        
        this.length--;
        
        return val;
    };
    
    minHeapPop() {
        let val = this.minHeap.heappop() * -1;
        
        while (!this.minHeap.isEmpty() && !this.store[val]) val = this.minHeap.heappop() * -1;
        
        if (val === null) return null;

        this.store[val]--;
        if (this.store[val] === 0) delete this.store[val];
        
        this.length--;
        
        return val;
    };
    
    popFromDualPQ(flag) {
        if (this.length === 0) return;
        
        if (flag === 1) this.maxHeapPop();
        else this.minHeapPop();
    };
    
    peekFromDualPQ() {
        if (this.length === 0) return [0, 0];
        
        const max = this.maxHeapPop();
        
        if (this.length === 0) return [max, max];
        
        const min = this.minHeapPop();
        
        return [max, min];
    };
};

function solution(operations) {
    const dualPQ = new DualPriorityQueue();
    
    for (const operation of operations) {
        const [prompt, data] = operation.trim().split(' ');
        
        switch(prompt) {
            case 'I':
                dualPQ.pushToDualPQ(Number(data));
                break;
                
            case 'D':
                dualPQ.popFromDualPQ(Number(data));
                break;
        };
    };
    
    return dualPQ.peekFromDualPQ();
}