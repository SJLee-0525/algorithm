function solution(n) {
    const calOneCnt = (bin) => {
        return bin.toString(2).split('').reduce((a, c) => {
            if (c === '1') return a + 1;
            return a;
        }, 0);
    };
    
    const oneCnt = calOneCnt(n);
    
    let ans = n + 1;
    while (calOneCnt(ans) !== oneCnt) ans++;
        
    return ans
}