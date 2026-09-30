function solution(brown, yellow) {
    if (yellow === 1) return [3, 3];
    
    for (let yy = 0; yy <= Math.floor(yellow / 2); yy++) {
        if (yellow % yy !== 0) continue;
        
        const yx = yellow / yy;
        
        if ((yx + 1) * 2 + (yy + 1) * 2 === brown) return [yx + 2, yy + 2];
    };
    
    return null;
};