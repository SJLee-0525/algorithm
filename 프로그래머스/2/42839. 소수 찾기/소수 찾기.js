function solution(numbers) {
    const nums = new Set();
    
    const path = Array();
    const used = Array(numbers.length).fill(0);
    
    function combi(lv) {
        if (lv === numbers.length) {
            const val = Number(path.join(''));
            if (val > 1) nums.add(val);
            return;
        };
        
        combi(lv + 1);
        
        for (let n = 0; n < numbers.length; n++) {
            if (used[n]) continue;
            
            used[n] = 1;
            path.push(numbers[n]);
            combi(lv + 1);
            path.pop();
            used[n] = 0;
        };
    };
    
    combi(0);
    
    function isPrime(num) {        
        for (let p = 2; p <= Math.sqrt(num); p++) if (num % p === 0) return false;
        return true;
    };
    
    let ans = 0;
    for (const num of nums) if (isPrime(num)) ans++; 

    return ans;
}