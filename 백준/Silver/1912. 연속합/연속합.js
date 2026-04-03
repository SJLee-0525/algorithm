class SegmentTree {
    constructor(arr) {
        this.n = arr.length
        this.tree = Array(this.n * 4).fill(null)
        this.build(arr, 0, this.n - 1, 1)
    }
 
    build(arr, start, end, node) {
        // (입력 배열, 현재 구간의 시작 인덱스, 현재 구간의 끝 인덱스, 현재 노드 번호) => void
        if (start === end) {
            // 리프 노드: 배열 값을 그대로 저장장
            this.tree[node] = {
                totalSum: arr[start],       // 구간 총합
                prefixMax: arr[start],      // 왼쪽에서 시작하는 최대 부분합
                suffixMax: arr[start],      // 오른쪽에서 시작하는 최대 부분합
                maxSubarraySum: arr[start]  // 구간 내 최대 연속 부분합합
            }
            return
        };

        // 왼쪽, 오른쪽 서브 트리 재귀적으로 구성
        let mid = Math.floor((start + end) / 2)
        this.build(arr, start, mid, node * 2)
        this.build(arr, mid + 1, end, node * 2 + 1)
        
        // 왼쪽과 오른쪽 서브 트리를 병합하여 현재 노드 정보 저장장
        this.tree[node] = this.merge(this.tree[node * 2], this.tree[node * 2 + 1])
    }

    merge(left, right) {
        // (왼쪽 자식 노드, 오른쪽 자식 노드) => {병합된 결과 노드}
        return {
            totalSum: left.totalSum + right.totalSum,
            prefixMax: Math.max(left.prefixMax, left.totalSum + right.prefixMax),   // 왼쪽 prefix와 오른쪽을 합친 경우 고려
            suffixMax: Math.max(right.suffixMax, right.totalSum + left.suffixMax),  // 오른쪽 suffix와 왼쪽을 합친 경우 고려
            maxSubarraySum: Math.max(
                left.maxSubarraySum,                // 왼쪽 서브트리의 최대 부분합
                right.maxSubarraySum,               // 오른쪽 서브트리의 최대 부분합
                left.suffixMax + right.prefixMax    // 양쪽을 이어붙인 경우 고려
            )
        }
    }

    query(left, right, start = 0, end = this.n - 1, node = 1) {
        // (구간의 시작, 구간의 끝, 현재 구간의 시작, 현재 구간의 끝, 현재 세그먼트 트리의 노드 번호) => {범위의 최대 부분합 정보}
        
        // 범위를 벗어난 경우 (무시)
        if (right < start || left > end) return null 

        // 현재 구간이 완전히 [left, right] 안에 포함될 경우
        if (left <= start && end <= right) return this.tree[node] 

        // 왼쪽, 오른쪽 부분으로 나눠서 탐색
        let mid = Math.floor((start + end) / 2)
        let leftRes = this.query(left, right, start, mid, node * 2)
        let rightRes = this.query(left, right, mid + 1, end, node * 2 + 1)

        // 한쪽만 유효한 경우
        if (!leftRes) return rightRes
        if (!rightRes) return leftRes

        // 두 부분을 병합하여 최종 결과 반환
        return this.merge(leftRes, rightRes)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const N = Number(input[0])
const arr = input[1].split(' ').map(Number)

const segTree = new SegmentTree(arr)
console.log(segTree.query(0, N - 1).maxSubarraySum)