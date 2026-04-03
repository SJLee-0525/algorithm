const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const keyboard = input.slice(0, 4).map((l) => l.trim().split(''));
    const checked = Array.from({ length: 4 }, () => Array(10).fill(false));
    const clickedList = input[4].trim().split('');


    for (const clicked of clickedList) {
        let isFound = false;

        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 10; y++) {
                if (keyboard[x][y] === clicked) {
                    isFound = true;
                    checked[x][y] = true;
                    break;
                };
            };

            if (isFound) break;
        };
        
    };
    
    let res = null;

    for (let x = 0; x < 4; x++) {
        let isFound = false;
        
        for (let y = 0; y < 10; y++) {
            if (checked[x][y]) {
                res = keyboard[x + 1][y + 1];
                isFound = true;
                break;
            };
        };

        if (isFound) break;
    };

    console.log(res);
    
};

solution(input)