function solution(k, m, score) {
    const sortedScore = score.sort((a, b) => a - b).slice();
    
    let ans = 0;
    
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        let last = null;
        
        for (let j = 0; j < m; j++) {
            last = sortedScore.pop();
        }
        
        ans += last * m
    }

    return ans
}