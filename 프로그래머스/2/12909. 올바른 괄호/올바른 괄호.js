function solution(s){
    let stack = 0
    for (const c of s) {
        if (c === '(') stack++;
        else {
            stack--;
            if (stack < 0) return false;
        };
    };
    
    if (stack === 0) return true;
    return false;
}