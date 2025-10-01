const solution = (input) => {
    const res = Array();

    const available = Array.from({ length: 9 }, () => Array(9).fill(false));
    available[1][4] = true;
    available[1][5] = true;
    available[3][4] = true;
    available[3][5] = true;
    available[4][2] = true;
    available[4][3] = true;
    available[5][8] = true;
    available[6][2] = true;
    available[6][3] = true;
    available[7][8] = true;
    available[8][6] = true;
    available[8][7] = true;
    
    for (let i = 0; i < input.length - 1; i++) {
        const blocks = input[i].trim().split('').map(Number);

        if (blocks.length < 3 || blocks[0] !== 1 || blocks[blocks.length - 1] !== 2) {
            res.push(`${i + 1}. NOT`);
            continue;
        };

        let impossible = false;
        const one = [0, 1], five = [0, 0];

        for (let b = 0; b < blocks.length - 1; b++) {
            if (!available[blocks[b]][blocks[b + 1]]) {
                impossible = true;
                break;
            };

            switch (blocks[b]) {
                case 1:
                    one[0]++;
                    break;

                case 2: 
                    one[1]++;
                    break;

                case 5:
                    five[0]++;
                    break;

                case 6:
                    five[1]++;
                    break;
            };
        };

        if (impossible || one[0] !== one[1] || five[0] !== five[1]) res.push(`${i + 1}. NOT`);
        else res.push(`${i + 1}. VALID`);
    };

    console.log( res.join('\n') );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);