function solution(want, number, discount) {
    let ans = 0;
    
    const wantIdx = {};
    for (let w = 0; w < want.length; w++) {
        wantIdx[want[w]] = w + 1;
    };
    
    const curCnt = Array(number.length).fill(0);
    const S = number.reduce((a, c) => a += c, 0);
    
    let d = 0;
    while (d < discount.length && d < 10) {
        const curG = discount[d];
        
        if (wantIdx[curG]) curCnt[wantIdx[curG] - 1]++;
        d++;
    };
    
    const check = () => {
        for (let n = 0; n < number.length; n++) {
            if (number[n] !== curCnt[n]) return false;
        };
        
        ans++;
        return true;
    };
    
    check();
    
    for (let d2 = d; d2 < discount.length; d2++) {
        const delG = discount[d2 - 10];
        const curG = discount[d2];
        if (wantIdx[delG]) curCnt[wantIdx[delG] - 1]--;
        if (wantIdx[curG]) curCnt[wantIdx[curG] - 1]++;
        
        check();
    };
    
    return ans;
}