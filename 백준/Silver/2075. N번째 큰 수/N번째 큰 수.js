class Heap {
//  V8(JavaScript 엔진)은 undefined로 채워진 배열은 packed array로 처리하지만, null을 채우면 sparse array로 분류함
//  → 결국 내부적으로 linked structure로 바뀌고, GC가 못 돌고 메모리 초과 발생
    constructor(N) {
        this.heap = null;
        this.size = null;
    }
    
    init(N) {
        this.heap = Array(N + 10); // 약간의 여유
        this.size = 0;
    }

    heapTop() {
        if (this.size === 0) return null;
        return this.heap[1];
    }

    heapPush(val) {
        this.heap[++this.size] = val;

        let cur = this.size;
        let par = Math.floor(cur / 2);

        while (par !== 0) {
            if (this.heap[cur] < this.heap[par]) {
                const temp = this.heap[cur];
                this.heap[cur] = this.heap[par];
                this.heap[par] = temp;
            }

            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    heapPop() {
        if (this.size === 0) return null;

        const ret = this.heap[1];
        this.heap[1] = this.heap[this.size--];

        let cur = 1, left = 2, right = 3;
        while ((left <= this.size && this.heap[cur] > this.heap[left])
        || (right <= this.size && this.heap[cur] > this.heap[right])) {
            const temp = this.heap[cur];

            if (right > this.size|| this.heap[left] < this.heap[right]) {
                this.heap[cur] = this.heap[left];
                this.heap[left] = temp;
                cur = left;
            } else {
                this.heap[cur] = this.heap[right];
                this.heap[right] = temp;
                cur = right;
            }

            left = cur * 2;
            right = left + 1;
        }

        return ret;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

// readline을 써야 함
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

let N;
let processedLines = 0;
const heap = new Heap();

rl.on("line", (line) => {
    if (processedLines === 0) {
        N = parseInt(line);
        heap.init(N);
    } else {
        // 숫자 배열을 한 번에 처리
        const numbers = line.split(' ');
        
        for (let i = 0; i < numbers.length; i++) {
            const num = parseInt(numbers[i]);
            
            if (heap.size < N) {
                heap.heapPush(num);
            } else if (heap.heapTop() < num) {
                heap.heapPop();
                heap.heapPush(num);
            }
        }
        
        // 처리 완료 후 즉시 메모리 해제
        numbers.length = 0;
        
        if (processedLines === N) {
            console.log(heap.heapTop());
            rl.close();
        }
    }
    processedLines++;
});
