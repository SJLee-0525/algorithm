function solution(clothes) {
    const gear = {};
    
    for (const [cloth, clothType] of clothes) {
        if (!gear[clothType]) gear[clothType] = [cloth];
        else gear[clothType].push(cloth);
    };
    
    let ans = 1;
    
    for (const [_, kind] of Object.entries(gear)) {
        ans *= (kind.length + 1);
    };
    
    return ans - 1;
}