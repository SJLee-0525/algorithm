const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const docs = input[0].trim();
    const target = input[1].trim();

    let cnt = 0;
    let s = 0;

    while (s < docs.length - target.length + 1) {
        let isCorresponded = true;

        for (let t = 0; t < target.length; t++) {
            if (target[t] !== docs[s + t]) {
                isCorresponded = false;
                break;
            };
        };

        if (isCorresponded) {
            cnt++;
            s += target.length;
        } else s++;
    };

    console.log(cnt);
};

solution(input);