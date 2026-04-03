class SegmentTree {
    constructor(arr) {
        this.n = arr.length - 1
        this.tree = Array.from({length: this.n * 4}, () => 0n)
        this.build(arr)
    }

    build(arr, start = 1, end = this.n, node = 1) {
        if (start === end) {
            this.tree[node] = arr[start]
            return arr[start]
        }

        const mid = Math.floor((start + end) / 2)
        this.tree[node] = this.build(arr, start, mid, node * 2) * this.build(arr, mid + 1, end, node * 2 + 1)
        return this.tree[node]
    }

    query(left, right, start = 1, end = this.n, node = 1) {
        if (right < start || end < left) return 1n

        if (left <= start && end <= right) return this.tree[node] % 1000000007n

        const mid = Math.floor((start + end) / 2)
        return (this.query(left, right, start, mid, node * 2) * this.query(left, right, mid + 1, end, node * 2 + 1)) % 1000000007n
    }

    update(index, newValue, start = 1, end = this.n, node = 1) {
        if (index < start || end < index) return

        if (start === end) {
            this.tree[node] = newValue
            return
        }

        const mid = Math.floor((start + end) / 2)
        this.update(index, newValue, start, mid, node * 2)
        this.update(index, newValue, mid + 1, end, node * 2 + 1)

        this.tree[node] = (this.tree[node * 2] * this.tree[node * 2 + 1]) % 1000000007n
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const [N, M, K] = input[0].split(' ').map(Number)
const arr = [0, ...input.slice(1, N + 1).map(BigInt)]

const segTree = new SegmentTree(arr)

for (let i = N + 1; i <= N + M + K; i++) {
    let [prompt, b, c] = input[i].split(' ').map(Number)
    if (prompt === 1) {
        segTree.update(b, BigInt(c)) 
    } else {
        console.log(segTree.query(b, c).toString()) 
    }
}