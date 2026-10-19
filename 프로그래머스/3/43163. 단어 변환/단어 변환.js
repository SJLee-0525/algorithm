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

function solution(begin, target, words) {
    const check = (word) => {
        const adj = Array();
        
        for (let s = 0; s < words.length; s++) {
            const candidate = words[s];
            
            if (word === candidate) continue;
            
            let diff = 0;
            
            for (let c = 0; c < word.length; c++) {
                if (word[c] !== candidate[c]) diff++;  
            };
            
            if (diff === 1) adj.push(s);
        };
        
        return adj;
    };
    
    const adjWords = Array(words.length);
    let beginIdx = null, targetIdx = null;
    
    for (let w = 0; w < words.length; w++) {
        const word = words[w];
        
        if (word === begin) beginIdx = w;
        else if (word === target) targetIdx = w;
        
        adjWords[w] = check(word);
    };
    
    if (targetIdx === null) return 0;
    
    const initial = check(begin);
    
    const visited = Array(words.length).fill(0);
    const queue = new Queue();
    
    if (beginIdx !== null) visited[beginIdx] = 1;
    
    for (const init of initial) {
        visited[init] = 2;
        queue.append(init);
    };
        
    while (!queue.isempty()) {
        const cur = queue.popleft();

        if (cur === targetIdx) return visited[cur] - 1;

        for (const next of adjWords[cur]) {
            if (visited[next] !== 0) continue;
                        
            visited[next] = visited[cur] + 1;
            queue.append(next);
        };
    };
    
    return 0;
}