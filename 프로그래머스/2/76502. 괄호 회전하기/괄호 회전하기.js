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
    
    rotateLeft() {
        if (this.size === 0 || this.size === 1) return;
        
        const pop = this.front;
        this.front = this.front.next;
        
        this.tail.next = pop;
        this.tail = pop;
        this.tail.next = null;
        
        return;
    };
    
    checkValid() {
        if (this.size === 0) return false;
        
        const stack = [];

        let cur = this.front;
        while (cur !== null) {
            if (cur.val === '(' || cur.val === '{' || cur.val === '[') stack.push(cur.val);
            else if (cur.val === ')') {
                if (stack.length && stack[stack.length - 1] === '(') stack.pop();
                else return false;
            } else if (cur.val === '}') {
                if (stack.length && stack[stack.length - 1] === '{') stack.pop();
                else return false;
            } else if (cur.val === ']') {
                if (stack.length && stack[stack.length - 1] === '[') stack.pop();
                else return false;
            } else {
                return false; 
            };
            
            cur = cur.next;
        };
        
        if (stack.length) return false;
        return true;
    };
};

function solution(s) {
    let ans = 0;
    
    const queue = new Queue();
    for (const c of s) queue.append(c);
    
    for (let i = 0; i < s.length; i++) {
        queue.rotateLeft();
        if ( queue.checkValid() ) ans++;
    };
    
    return ans;
}