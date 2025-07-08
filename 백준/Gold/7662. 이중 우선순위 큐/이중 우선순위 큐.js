/*
----- 나는 정말 자바 스크립트가 싫어. -----

단일 힙으로 어찌저찌 해보려고 했는데, 안 됨

단일 힙은 루트 하나만 제거 가능하기에, 최소 힙이면 최솟값만, 최대 힙이면 최댓값만 바로 제거가 가능함.
만약 최소 힙에서 최댓값을 찾는 것과 같이 반대 값을 찾으려면 선형 탐색이 필요함 → O(N)

단일 힙으로 값 제거 전에 최댓값 pop 시에는 maxHeapify, 최솟값 pop 시에는 minHeapify를 호출하는 식으로 해보려 했으나,
heapify는 특정 노드 기준의 하위 자식들과의 관계만 재정렬할 뿐, 전체 트리에서 최댓값/최솟값을 루트로 끌어올 수는 없음.
즉, heapify 하나로 원하는 값이 루트로 올라온다는 보장은 없음.

그래서 최대 힙과 최소 힙을 각각 사용하고,
값의 삽입/삭제 상태는 map을 이용해 논리적으로 추적하는 방식(lazy deletion)을 사용해야 함.

두 힙은 구조가 서로 다르기 때문에, 하나에서 삭제했다고 해도 다른 힙에서는 선형 탐색 없이는 알 수 없음.
그래서 map으로 값의 유효성을 판단하고, 삭제된 값은 실제 pop 시 무시하도록 구현해야 함.

단, 삭제되어 map에서 개수가 0이 된 값들을 map에 계속 남겨두면 메모리가 누적됨.
JavaScript의 Map은 값이 0이더라도 key가 존재하면 메모리에 유지되기 때문에,
사용이 끝난 키(map.get(key) === 0)는 반드시 map.delete(key)로 제거해야 메모리 초과를 방지할 수 있음.

하도 메모리 초과가 떠서 힙 배열을 정적 배열로 바꿔봄. 좀 대라 좀
*/

const readline = require('readline');


class Heap {
    /**
     * 힙 생성
     * @param {boolean} isMin - true면 최소 힙, false면 최대 힙
     */
    constructor(isMin = true) {
        this.heap = new Array(1000001); // 크기 고정 정적 배열 선언
        this.size = 0;                  // heap 내 실제 원소 개수 (1부터 시작)
        this.isMin = isMin;
    }

    /**
     * 두 값을 비교
     * @param {number} a 
     * @param {number} b 
     * @returns {boolean} 최소 힙이면 a < b, 최대 힙이면 a > b
     */
    compare(a, b) {
        return this.isMin ? a < b : a > b;
    }

    /**
     * 힙에 값을 추가하고 힙 속성을 유지
     * @param {number} val - 삽입할 값
     */
    heapPush(val) {
        this.heap[++this.size] = val; // 힙에 값 삽입 후 size 증가

        let cur = this.size;
        let parent = Math.floor(cur / 2);

        // 부모와 비교하며 위로 이동
        while (parent > 0 && this.compare(this.heap[cur], this.heap[parent])) {
            [this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]];
            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    /**
     * 힙에서 루트 값을 제거하고 반환
     * @returns {number|null} 제거된 루트 값 (또는 비어있으면 null)
     */
    heapPop() {
        if (this.size === 0) return null; // 힙이 비어있으면 null 반환

        const ret = this.heap[1];               // 최상단 값 저장
        this.heap[1] = this.heap[this.size--];  // 마지막 값을 루트로 이동하고 size 감소

        // 최대, 최소 힙 여부에 따라 heapify
        if (this.isMin) this.minHeapify();
        else this.maxHeapify();

        return ret;
    }

    /**
     * 최소 힙 구조를 유지하도록 재정렬
     */
    minHeapify() {
        let cur = 1;
        while (true) {
            const left = cur * 2;
            const right = left + 1;
            let smallest = cur;

            if (left <= this.size && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right <= this.size && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === cur) break;

            [this.heap[cur], this.heap[smallest]] = [this.heap[smallest], this.heap[cur]];
            cur = smallest;
        }
    }

    /**
     * 최대 힙 구조를 유지하도록 재정렬
     */
    maxHeapify() {
        let cur = 1;
        while (true) {
            const left = cur * 2;
            const right = left + 1;
            let largest = cur;

            if (left <= this.size && this.heap[left] > this.heap[largest]) largest = left;
            if (right <= this.size && this.heap[right] > this.heap[largest]) largest = right;

            if (largest === cur) break;

            [this.heap[cur], this.heap[largest]] = [this.heap[largest], this.heap[cur]];
            cur = largest;
        }
    }

    /**
     * 힙의 루트 값을 반환
     * @returns {number|null} 루트 값 (없으면 null)
     */
    top() {
        return this.size === 0 ? null : this.heap[1];
    }

    /**
     * 힙이 비어있는지 확인
     * @returns {boolean} 비어있으면 true
     */
    isEmpty() {
        return this.size === 0;
    }
}


/**
 * 힙 2개(min, max)에 값을 삽입하고, map에 삽입 횟수를 기록
 * @param {number} x - 삽입할 값
 * @param {Heap} minHeap 
 * @param {Heap} maxHeap 
 * @param {Map<number, number>} map 
 */
const insert = (x, minHeap, maxHeap, map) => {
    minHeap.heapPush(x);
    maxHeap.heapPush(x);
    map.set(x, (map.get(x) || 0) + 1); // 카운트 증가
}

/**
 * 유효한 값을 힙에서 제거 후, map 동기화
 * @param {Heap} heap - minHeap 또는 maxHeap
 * @param {Map<number, number>} map 
 */
const remove = (heap, map) => {
    while (!heap.isEmpty()) {
        const val = heap.top();

        // 이미 제거된 값이면 무시
        if (!map.has(val)) {
            heap.heapPop();
            continue;
        }

        // 카운트가 0 이하이면 무시하고 heap에서도 제거
        if (map.get(val) <= 0) {
            map.delete(val); // 맵에서 제거
            heap.heapPop();
            continue;
        }

        // 유효한 값이면 카운트 감소 및 heap에서 제거
        map.set(val, map.get(val) - 1);
        if (map.get(val) <= 0) map.delete(val); // 개수가 0이 되면 맵에서 제거
        heap.heapPop();
        break;
    }
}

/**
 * 힙 루트에 삭제된 값이 올라와 있다면 제거
 * @param {Heap} heap - minHeap 또는 maxHeap
 * @param {Map<number, number>} map 
 */
const cleanHeap = (heap, map) => {
    while (!heap.isEmpty()) {
        const val = heap.top();

        // 유효하지 않은 값이면 제거
        if (!map.has(val) || map.get(val) <= 0) {
            map.delete(val); 
            heap.heapPop();
        } else {
            break;
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    const T = parseInt(lines[0], 10);

    let idx = 1;
    const res = [];

    for (let t = 0; t < T; t++) {
        const K = parseInt(lines[idx++], 10);

        const map = new Map();          // 삽입된 숫자의 개수를 추적

        const minHeap = new Heap(true);  // 최소 힙
        const maxHeap = new Heap(false); // 최대 힙

        for (let i = 0; i < K; i++) {
            const [prompt, n] = lines[idx++].split(' ');
            const num = Number(n);

            if (prompt === 'I') {
                insert(num, minHeap, maxHeap, map);
            } else {
                if (num === 1) remove(maxHeap, map);
                else if (num === -1) remove(minHeap, map);
            }
        }

        // map 기준으로 유효하지 않은 값을 heap에서 제거
        cleanHeap(minHeap, map);
        cleanHeap(maxHeap, map);

        const min = minHeap.top(), max = maxHeap.top();
        
        if (min === null || max === null) {
            res.push('EMPTY');
        } else {
            res.push([max, min].join(' '));
        }
    }

    process.stdout.write(res.join('\n') + '\n');
});
