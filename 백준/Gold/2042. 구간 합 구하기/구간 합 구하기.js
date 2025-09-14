class SegmentTree{
    constructor(arr) {
        this.n = arr.length - 1
        this.tree = Array.from({length: this.n * 4}, () => 0n)
        this.build(arr, 1, this.n, 1)
    }

    build(arr, start, end, node) {
        if (start === end) {
            this.tree[node] = arr[start]
            return this.tree[node]
        }

        const mid = Math.floor((start + end) / 2)    
        this.tree[node] = this.build(arr, start, mid, node * 2) + this.build(arr, mid + 1, end, node * 2 + 1)
        return this.tree[node]
    }

    query(left, right, start = 1, end = this.n, node = 1) {
        if (right < start || left > end) return 0n

        if (left <= start && end <= right) return this.tree[node]

        const mid = Math.floor((start + end) / 2)
        return this.query(left, right, start, mid, node * 2) + this.query(left, right, mid + 1, end, node * 2 + 1)
    }

    update(start, end, node, index, diff) {
        if (index < start || end < index) return

        this.tree[node] += diff
        if (start === end) return

        const mid = Math.floor((start + end) / 2)
        this.update(start, mid, node * 2, index, diff)
        this.update(mid + 1, end, node * 2 + 1, index, diff)
    }
}

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const [N, M, K] = input[0].split(' ').map(Number)
const arr = [0, ...input.slice(1, N + 1).map(BigInt)];

const segTree = new SegmentTree(arr)

for (let m = N + 1; m <= N + M + K; m++) {
    const [prompt, b, c] = input[m].split(' ')
    
    if (Number(prompt) === 1) {
        const index = Number(b)
        const newValue = BigInt(c)
        const diff = newValue - arr[index]
        arr[index] = newValue
        segTree.update(1, N, 1, index, diff)
    } else {
        const left = Number(b)
        const right = Number(c)
        console.log(segTree.query(left, right).toString())
    }
}