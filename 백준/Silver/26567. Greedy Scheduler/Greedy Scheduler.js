class Staff {
    constructor(n) {
        this.staffs = Array(n + 1).fill(0);
        this.pos = Array.from({ length: n }, (_, i) => i + 1);

        this.staffs[0] = 1001;
    }

    next() {
        const min = Math.min(...this.staffs);

        for (let n = 1; n < this.staffs.length; n++) {
            this.staffs[n] -= min;

            if (this.staffs[n] === 0) this.pos.push(n);
        }
    }

    cal(time) {
        if (this.pos.length === 0) return null;

        const staff = this.pos.shift();
        this.staffs[staff] = time;

        return staff;
    }
}


const solution = (input) => {
    const M = Number(input[0]);

    const results = [];
    for (let tc = 0; tc < M; tc++) {
        const [n, _] = input[tc * 2 + 1].split(' ').map(Number);

        const staffs = new Staff(n);
        const customers = input[tc * 2 + 2].split(' ').map(Number);

        const res = [];
        for (cus = 0; cus < customers.length; cus++) {
            if (staffs.pos.length > 0) {
                res.push(staffs.cal(customers[cus]));
            } else {
                staffs.next();
                res.push(staffs.cal(customers[cus]));
            }

        }
        results.push(res.join(' '));
    }
    
    console.log(results.join('\n'));
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);