class Heap {
    constructor() {
        this.heap = [null];
    }

    heapsize() {
        return this.heap.length - 1;
    }

    heappush(val) { // val: 강연료(pay)
        this.heap.push(val);
        
        const size = this.heapsize();
        if (size === 1) return;

        let cur = size;
        let par = Math.floor(cur / 2);

        while (par > 0) {
            if (this.heap[cur] > this.heap[par]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            } else break;

            cur = par;
            par = Math.floor(cur / 2);
        }
    }

    heappop() {
        if (this.heapsize() === 0) return null;
        if (this.heapsize() === 1) return this.heap.pop();

        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();

        const size = this.heapsize();
        let cur = 1, left = 2, right = 3;
        while ((left <= size && this.heap[left] > this.heap[cur]) 
            || (right <= size && this.heap[right] > this.heap[cur])) {
            if (right > size || this.heap[left] > this.heap[right]) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            } else {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            }

            left = cur * 2;
            right = left + 1;
        }

        return ret;
    }
}


const solution = (input) => {
    const N = Number(input[0]);
    const lectures = Array.from({ length: 10001 }, () => []);

    let maxDay = 0;
    for (let n = 1; n <= N; n++) {
        const [pay, day] = input[n].split(' ').map(Number);
        lectures[day].push(pay);
        
        if (maxDay < day) maxDay = day;
    }

    const heap = new Heap();
    let totalPay = 0;

    // 역순으로
    for (let today = maxDay; today >= 1; today--) {
        // 당일 가능한 강연료를 모두 힙에 push하고 그 날 가장 페이 센 것 pop
        for (const pay of lectures[today]) heap.heappush(pay);

        if (heap.heapsize() > 0) totalPay += heap.heappop();
    }

    console.log(totalPay);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
