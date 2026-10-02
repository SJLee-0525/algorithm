function solution(n) {
    let ans = 1;
    if (n === 1) return ans;
    
    const arr = Array.from({ length: Math.ceil(n / 2) + 1 }, (_, i) => i);
    for (let a = 1; a < arr.length; a++) arr[a] += arr[a - 1];
    
    let l = 0, r = 1;
    while (l < r) {
        if (r < arr.length) {
            const s = arr[r] - arr[l];
            if (s === n) {
                ans++;
                r++;
            } else if (s > n) {
                l++
            } else r++;
        } else l++
    };
    
    return ans;
}