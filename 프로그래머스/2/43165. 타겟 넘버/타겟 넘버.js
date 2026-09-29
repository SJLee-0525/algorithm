function solution(numbers, target) {
    let ans = 0;
    
    const dfs = (lv, val) => {
        if (lv === numbers.length) {
            if (val === target) ans++;
            return;
        };
        
        dfs(lv + 1, val + numbers[lv]);
        dfs(lv + 1, val - numbers[lv]);
    };
    
    dfs(0, 0);
    
    return ans;
};