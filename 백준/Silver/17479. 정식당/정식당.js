const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input, idx) => {
    const [A, B, C] = input[idx++].trim().split(' ').map(Number);
    const menu = new Map();

    for (let a = 0; a < A; a++) {
        const [name, price] = input[idx++].trim().split(' ');
        menu.set(name, [0, Number(price)]);
    };

    for (let b = 0; b < B; b++) {
        const [name, price] = input[idx++].trim().split(' ');
        menu.set(name, [1, Number(price)]);
    };

    for (let c = 0; c < C; c++) menu.set(input[idx++].trim(), [2, null]);

    const N = Number(input[idx++].trim());
    let normal = 0, special = 0, service = 0;
    
    for (let n = 0; n < N; n++) {
        const [type, price] = menu.get(input[idx++].trim());

        switch (type) {
            case 0: // 일반
                normal += price;
                break;

            case 1: // 특별
                special += price;
                break;

            case 2: // 서비스
                service++;
                break;
        };

        if (service > 1) return 'No';
    };

    if (special > 0 && normal < 20000) return 'No';
    else if (service > 0 && normal + special < 50000) return 'No';

    return 'Okay';
};

console.log( solution(input, 0) ); 
