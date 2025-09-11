class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.front = null;
        this.tail = null;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.front = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    popleft() {
        if (this.size === 0) return null;

        const ret = this.front.val;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        }

        return ret;
    }

    isempty() {
        return this.size === 0;
    }
}


const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

const solution = (input) => {
    const res = new Array();

    const T = Number(input[0].trim());

    const convert = (elem) => {
        switch (elem) {
            case '@':
                return 1;

            case '*':
                return -2;
            
            case '#':
                return -3;

            default:
                return 0;
        }
    }

    let idx = 1;
    for (let tc = 0; tc < T; tc++) {
        const [W, H] = input[idx++].trim().split(' ').map(Number);
        
        const building = [
            Array(W + 2).fill(-3),
            ...input.slice(idx, idx + H).map((l) => [-3, ...l.split('').map((e) => convert(e)), -3]),
            Array(W + 2).fill(-3),
        ];
        
        res.push( testcase(W, H, building) );
        
        // console.log(`${tc + 1} ${testcase(W, H, building)}`)
        // console.log(building.map((l) => l.map((e) => e.toString()).join(' ')).join('\n') );
        // console.log('\n\n')

        idx += H;
    }

    console.log(res.join('\n'));
}

const testcase = (W, H, building) => {    
    const queue = new Queue();
    const fire = Array();
    
    for (let h = 1; h <= H; h++) {
        for (let w = 1; w <= W; w++) {
            if (building[h][w] === 0) {
                let isFired = false;
                for (let k = 0; k < 4; k++) {
                    if (building[h + DI[k]][w + DJ[k]] === -2) isFired = true;
                }
    
                if (isFired) {
                    building[h][w] = -1;
                    fire.push([h, w]);
                }
            } else if (building[h][w] === 1) {
                if (h === 1 || h === H || w === 1 || w === W) return '1';
                queue.append([h, w, 1])
            }
        }
    }

    const next = new Array();
    
    while (true) {
        while (!queue.isempty()) {
            const [i, j, d] = queue.popleft();
            
            for (let k = 0; k < 4; k++) {
                const ni = i + DI[k], nj = j + DJ[k], nd = d + 1;
                
                if (building[ni][nj] !== 0) continue;
                
                if (building[ni][nj] === 0 && (ni === 1 || ni === H || nj === 1 || nj === W)) return nd.toString();
                
                building[ni][nj] = nd;
                next.push([ni, nj, nd]);
            }
        }

        if (!next.length) return 'IMPOSSIBLE';
        while (next.length) queue.append( next.pop() );
        
        const newFire = new Array();
        
        while (fire.length) {
            const [fi, fj] = fire.pop();
    
            for (let k = 0; k < 4; k++) {
                const nfi = fi + DI[k], nfj = fj + DJ[k];
    
                if (building[nfi][nfj] >= 0) {
                    building[nfi][nfj] = -1;
                    newFire.push([nfi, nfj]); 
                }
            }
    
            building[fi][fj] = -2;
        }
    
        while (newFire.length) fire.push( newFire.pop() );
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);