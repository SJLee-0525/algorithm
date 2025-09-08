class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(W) {
        this.maxWeight = W;
        this.init();
    }

    init() {
        this.size = 0;
        this.weight = 0;
        this.front = null;
        this.tail = null;
    }

    append(truck) {
        const node = new Node(truck);

        if (this.size === 0) {
            this.front = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
        if (truck > 0) this.weight += truck;
        return;
    }

    popLeft() {
        if (this.size === 0) return null;

        const ret = this.front.val;
        if (ret > 0) this.weight -= ret;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        }

        return ret;
    }

    isPossible(truck) {
        return this.maxWeight - this.weight >= truck;
    }
}

const solution = (input) => {
    const [N, L, W] = input[0].trim().split(' ').map(Number); // N: 트럭 수 L: 다리 길이 W: 최대 하중
    const trucks = input[1].trim().split(' ').reverse().map(Number);

    const bridge = new Queue(W);
    for (let _ = 0; _ < L; _++) bridge.append(0);

    let cnt = 0, time = 0;
    let truck = trucks.pop();

    while (cnt < N) {
        const finish = bridge.popLeft();
        if (finish > 0) cnt++;

        if (bridge.isPossible(truck)) {
            bridge.append(truck);
            if (trucks.length) truck = trucks.pop();
        } else bridge.append(0);

        time++;
    }

    console.log(time);
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);