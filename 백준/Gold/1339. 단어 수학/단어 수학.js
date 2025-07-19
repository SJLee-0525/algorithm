class Heap {
    constructor() {
        this.heap = [null];
    }

    heapsize() {
        return this.heap.length - 1;
    }

    heappush(val) {
        this.heap.push(val);

        const size = this.heapsize();
        if (size === 1) return;

        let cur = size, par = Math.floor(size / 2);
        while (par !== 0) {
            if (this.heap[cur][0] > this.heap[par][0]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            }

            cur = par;
            par = Math.floor(cur / 2);
        }

        return;
    }

    heappop() {
        if (this.heapsize() === 0) return null;
        else if (this.heapsize() === 1) return this.heap.pop();

        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();

        const size = this.heapsize();

        let cur = 1, left = 2, right = 3;
        while ((left <= size && this.heap[cur][0] < this.heap[left][0])
        || right <= size && this.heap[cur][0] < this.heap[right][0]) {
            if (right > size || this.heap[left][0] > this.heap[right][0]) {
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

    const heap = new Heap();

    const used = Array(26).fill(0);   // 해당 알파벳이 등장한 자릿수에 따라 가중치 저장할 배열
    const value = Array(26).fill(-1); // 해당 알파벳에 들어갈 숫자 저장할 배열

    for (let n = 1; n < N + 1; n++) {
        const word = input[n].split('');

        for (let w = 1; w < word.length + 1; w++) {
            const charIdx = word[word.length - w].charCodeAt() - 65; // 0을 A로, 25를 Z로 표현 
            used[charIdx] += 10 ** (w - 1);                          // 해당 알파벳이 등장한 자리에 따라 가중치 누적
        }
    }

    // 최대 힙에 삽입 [가중치, 알파벳 인덱스]
    for (let u = 0; u < 26; u++) if (used[u] > 0) heap.heappush([used[u], u]); 

    let curNum = 9;
    while (heap.heapsize() > 0) {
        const [_, charIdx] = heap.heappop();  // 최대 힙에서 하나씩 뽑으며
        value[charIdx] = curNum--;            // 9부터 차례로 값을 지정
    }

    const resNumbers = [];                    // 완성된 숫자 담을 배열
    for (let n = 1; n < N + 1; n++) {
        const word = input[n].split('');

        let tempNum = '';
        for (let w = 0; w < word.length; w++) {
            const charIdx = word[w].charCodeAt() - 65;  // 원본 알파벳에서 알파벳 인덱스 계산 후
            tempNum += String(value[charIdx]);          // 해당하는 알파벳 인덱스를 이용해 저장된 숫자 불러와서 추가
        }

        resNumbers.push(Number(tempNum))                // 숫자로 변환해 완성된 숫자 배열에 담음
    }

    console.log(
        resNumbers.reduce((a, s) => a += s, 0) // 배열 sum 계산 후 출력
    );
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);