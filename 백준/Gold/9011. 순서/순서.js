class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(N) {
        this.init();

        for (let n = 1; n < N + 1; n++) this.append(n);
    }

    init() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            node.prev = this.end;
            this.end.next = node;
            this.end = node;
        }

        this.size++;
    }

    find(tarIdx) {
        if (this.size === 0) return false;
        else if (tarIdx < 0 || tarIdx >= this.size) return false;

        if (this.size === 1) {
            const val = this.start.val;
            this.init();

            return val;
        } else if (tarIdx === 0) {
            const val = this.start.val;

            this.start = this.start.next;
            this.start.prev = null;
            this.size--;

            return val;
        } else if (tarIdx === this.size - 1) {
            const val = this.end.val;

            this.end = this.end.prev;
            this.end.next = null;
            this.size --;

            return val;
        }

        const tarNode = this._find(this.start, 0, tarIdx);

        if (!tarNode) return false;

        const val = tarNode.val;

        tarNode.prev.next = tarNode.next;
        tarNode.next.prev = tarNode.prev;
        this.size--;

        return val;
    }

    _find(curNode, curIdx, tarIdx) {
        if (curIdx === tarIdx) return curNode;

        if (!curNode.next) return false;
        return this._find(curNode.next, curIdx + 1, tarIdx);
    }
}


const solution = (input) => {
    const res = [];
    let idx = 0;

    const T = Number(input[idx++]);

    for (let tc = 0; tc < T; tc++) {
        const N = Number(input[idx++]);
        const seq = input[idx++].split(' ').map(Number);

        const candidates = new LinkedList(N);
        const tempRes = new Array(N);

        let isFailed = false;
        for (let n = N - 1; n > -1; n--) {
            const tar = candidates.find(seq[n]);

            if (tar === false) isFailed = true;
            else tempRes[n] = tar;
        }

        if (isFailed) res.push('IMPOSSIBLE');
        else res.push(tempRes.join(' '));
    }

    console.log(res.join('\n'));
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);