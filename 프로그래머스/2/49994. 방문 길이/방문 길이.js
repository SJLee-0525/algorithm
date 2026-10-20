const directions = {
    'U': [-1, 0, 0],
    'D': [1, 0, 1],
    'R': [0, 1, 2],
    'L': [0, -1, 3],
};

function solution(dirs) {
    const checked = Array.from({ length: 11 }, () => Array.from({ length: 11 }, () => Array(4).fill(0)));
    
    let ci = 5, cj = 5;
    let newMove = 0;
    
    for (const dir of dirs) {
        const [mi, mj, md] = directions[dir];
        
        const ni = ci + mi, nj = cj + mj;
        
        if (ni < 0 || 10 < ni || nj < 0 || 10 < nj) continue;
        
        const nd = md % 2 === 0 ? md + 1 : md - 1;
        
        if (checked[ci][cj][md] === 0 && checked[ni][nj][nd] === 0) {
            checked[ci][cj][md] = 1;
            checked[ni][nj][nd] = 1;
            
            newMove++;
        };
        
        ci = ni;
        cj = nj;
    };
    
    return newMove;
};