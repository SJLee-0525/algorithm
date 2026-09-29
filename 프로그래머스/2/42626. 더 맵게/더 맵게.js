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
            if (this.heap[cur] < this.heap[par]) {
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
        
        while ((left < this.heap.length && this.heap[cur] > this.heap[left])
              || (right < this.heap.length && this.heap[cur] > this.heap[right])) {
            if (right >= this.heap.length || this.heap[left] < this.heap[right]) {
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
    
    size() {
        return this.heap.length - 1;
    };
    
    top() {
        if (this.heap.length <= 1) return null;
        return this.heap[1];
    };
}

function solution(scoville, K) {
    const heap = new Heap();
    for (const s of scoville) heap.heappush(s);
    
    let cnt = 0;
    
    function cook() {
        const l = heap.heappop();
        const h = heap.heappop();
        heap.heappush(l + (h * 2));
        
        cnt++;
    };
    
    while (heap.size() >= 2 && heap.top() < K) cook();
    
    if (heap.size() <= 0 || (heap.size() > 0 && heap.top() < K)) return -1;
    return cnt;
};