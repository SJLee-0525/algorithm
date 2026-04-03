const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = Array();

    for (const word of input) {
        switch (word.trim()) {
            case 'animal':
                res.push('Panthera tigris');
                break;

            case 'tree':
                res.push('Pinus densiflora');
                break;

            case 'flower':
                res.push('Forsythia koreana');
                break;
        };
    };

    console.log(res.join('\n'));
};

solution(input);