class Candidate {
    constructor(person, idx) {
        this.person = person;
        this.voteCnt = 1;
        this.lastUpdated = idx;
    };
};


class Vote {
    constructor(N) {
        this.frames = Array(N);
        this.candidates = new Set();

    }

    recommend(person, idx) {
        if (this.candidates.has(person)) {
            const tarIdx = this.frames.findIndex((candidate) => candidate.person === person);

            this.frames[tarIdx].voteCnt++;
        } else {
            const candidate = new Candidate(person, idx);
            
            if (this.candidates.size < this.frames.length) this.frames[this.candidates.size] = candidate;
            else {
                this.candidates.delete(this.frames[this.frames.length - 1].person);
                this.frames[this.frames.length - 1] = candidate;
            };

            this.candidates.add(person);
        };

        this.frames.sort((a, b) => b.voteCnt - a.voteCnt || b.lastUpdated - a.lastUpdated);
        return;
    };

    printResult() {
        return [...this.candidates].sort((a, b) => a - b).join(' ');
    };
};


const solution = (input) => {
    const N = Number(input[0].trim());
    const vote = new Vote(N);
    
    const recommends = input[2].trim().split(' ').map(Number);
    recommends.forEach((person, idx) => { vote.recommend(person, idx) });

    console.log( vote.printResult() );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);