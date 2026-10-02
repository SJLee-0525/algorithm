function solution(n)
{
    let c = n
    let ans = 0;
    
    while (c > 0) {
        if (c % 2 === 0) {
            c /= 2;
        } else {
            c -= 1;
            ans++;
        };
    };
    
    return ans;
};