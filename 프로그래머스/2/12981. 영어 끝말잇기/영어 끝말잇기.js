function solution(n, words) {
    const wKey = new Set();
    wKey.add(words[0]);
    
    for (let w = 1; w < words.length; w++) {
        if (wKey.has(words[w]) || words[w - 1][words[w - 1].length - 1] !== words[w][0]) {
            return [w % n + 1, Math.floor(w / n) + 1];
        };
        
        wKey.add(words[w]);
    };
    
    return [0, 0];
}