const fs = require('fs');
const N = Number( fs.readFileSync('/dev/stdin').toString().trim() );

const solution = (N) => {
    const cards = Array(N);
    const seq = Array(N);

    let curCard = 1, curSeq = 0;
    const m = Math.floor( N / 2 );
    cards[m] = curCard++;
    seq[curSeq++] = m + 1;

    let l = m - 1, r = m + 1;
    while (0 <= l || r < N) {
        if (0 <= l) {
            cards[l] = curCard++;
            seq[curSeq++] = 1 + l--;
        };

        if (r < N) {
            cards[r] = curCard++;
            seq[curSeq++] = 1 + r++;
        };
    };

    console.log(`YES\n${cards.join(' ')}\n${seq.join(' ')}`);
};

solution(N);