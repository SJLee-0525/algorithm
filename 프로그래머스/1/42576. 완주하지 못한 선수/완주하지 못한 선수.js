function solution(participant, completion) {
    const people = {};
    for (const p of participant) {
        if (people[p]) people[p]++;
        else people[p] = 1;
    };
    
    for (const c of completion) if (people[c]) people[c]--;
    
    for (const [n, c] of Object.entries(people)) {
        if (c) return n;
    };
};