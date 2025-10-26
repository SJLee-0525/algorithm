class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
}


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
        }

        this.size++;
    };

    popleft() {
        if (this.size === 0) return null;

        const ret = this.front.val;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--
        };

        return ret;
    };

    isempty() {
        return this.size === 0;
    };
};


const solution = ([hour, minute]) => {
    const targetTime = (hour * 6) + (minute / 10);

    function bfs() {
        const buttons = [1, 6, 60];
        const startedButtons = [1, 3, 6, 60];

        const clicked = Array.from({ length: targetTime + 1 }, () => Array(2).fill(-1));
        clicked[0][0] = 0;
        if (targetTime >= 3) clicked[3][1] = 1;

        const queue = new Queue();
        queue.append([0, 0]);
        if (targetTime >= 3) queue.append([3, 1]);

        while (!queue.isempty()) {
            const [cur, started] = queue.popleft();

            if (!started) {
                // 조리 중이 아닐 때
                for (const button of buttons) {
                    const next = cur + button;
    
                    if (next > targetTime || clicked[next][0] > -1) continue;
    
                    clicked[next][0] = clicked[cur][0] + 1;
                    queue.append([next, 0]);
                };

                // 조리 시작
                if (clicked[cur][1] === -1) {
                    clicked[cur][1] = clicked[cur][0] + 1;
                    queue.append([cur, 1]);
                };
            } else {
                for (const startedButton of startedButtons) {
                    const next = cur + startedButton;
    
                    if (next > targetTime || clicked[next][1] > -1) continue;
    
                    clicked[next][1] = clicked[cur][1] + 1;
                    queue.append([next, 1]);
                };
            };
        };

        return clicked[targetTime][1];
    };

    console.log( bfs() );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(':').map(Number);

solution(input);