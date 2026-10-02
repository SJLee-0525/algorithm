function solution(n,a,b)
{
    let A = n + a - 1;
    let B = n + b - 1;
    
    let ans = 0;
    while (A !== B) {
        ans++;
        A = Math.floor(A / 2);
        B = Math.floor(B / 2);
    };
    
    return ans;
}