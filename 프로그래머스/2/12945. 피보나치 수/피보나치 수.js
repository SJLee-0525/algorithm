function solution(n) {
    const pivo = Array(n + 1).fill(0);
    pivo[1] = 1;
    
    for (let p = 2; p < pivo.length; p++) pivo[p] = (pivo[p - 1] + pivo[p - 2]) % 1234567;
    
    return pivo[n];
}