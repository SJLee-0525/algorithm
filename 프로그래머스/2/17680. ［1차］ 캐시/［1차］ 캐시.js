class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
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
    
    length() {
        return this.size;
    };
    
    append(val) {
        const node = new Node(val);
        
        if (this.size === 0) {
            this.front = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        };
        
        this.size++;
        
        return node;
    };
    
    popLeft() {
        if (this.size === 0) return null;
        
        const ret = this.front.val;
        
        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.front.prev = null;
            this.size--;
        };
        
        return ret;
    };
    
    popRight() {
        if (this.size === 0) return null;
        
        const ret = this.tail.val;
        
        if (this.size === 1) this.init();
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        };
        
        return ret;
    };
    
    detach(node) {
        if (node.prev !== null) node.prev.next = node.next;
        else this.front = node.next;
        
        if (node.next !== null) node.next.prev = node.prev;
        else this.tail = node.prev;
        
        node.next = null
        node.prev = null;
        
        return;
    };
    
    delete(node) {
        this.detach(node);
        this.size--;

        return;
    };
    
    moveToTail(node) {
        if (node === this.tail) return;
        
        this.detach(node);
        
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        
        return;
    };
};

class Cache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = new Queue();
        this.memory = new Map();
    };
    
    search(city) {
        if (this.maxSize === 0) return 5;
        
        // cache hit
        if (this.memory.has(city)) {
            const node = this.memory.get(city);
            
            this.queue.delete(node);
            
            const newNode = this.queue.append(city);
            this.memory.set(city, newNode);
            
            return 1;
        };
        
        // cache miss
        if (this.queue.length() >= this.maxSize) {
            const deletedCity = this.queue.popLeft();
            this.memory.delete(deletedCity);
        };
        
        const newNode = this.queue.append(city);
        this.memory.set(city, newNode);
        
        return 5;
    };
};

function solution(cacheSize, cities) {
    const cacheMemory = new Cache(cacheSize);
    
    let t = 0;
    
    for (const city of cities) {
        t += cacheMemory.search(city.toLowerCase());
    };
    
    return t;
}