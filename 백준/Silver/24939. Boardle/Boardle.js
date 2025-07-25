const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    let sx = 1, ex = N;
    let sy = 1, ey = M;

    const Q = Number(input[1]);
    
    for (let q = 2; q < Q + 2; q++) {
        const [x, y, d] = input[q].split(' ').map(Number);

        switch (d) {
            case 1: // 동
                sx = Math.max(sx, x + 1);
                sy = Math.max(sy, y);
                ey = Math.min(ey, y);
                break;

            case 2: // 서
                ex = Math.min(ex, x - 1);
                sy = Math.max(sy, y);
                ey = Math.min(ey, y);
                break;

            case 3: // 남
                ey = Math.min(ey, y - 1);
                sx = Math.max(sx, x);
                ex = Math.min(ex, x);
                break;

            case 4: // 북
                sy = Math.max(sy, y + 1);
                sx = Math.max(sx, x);
                ex = Math.min(ex, x);
                break;
            
            case 5: // 북동
                sx = Math.max(sx, x + 1);
                sy = Math.max(sy, y + 1);
                break;
            
            case 6: // 북서
                ex = Math.min(ex, x - 1);
                sy = Math.max(sy, y + 1);
                break;

            case 7: // 남동
                sx = Math.max(sx, x + 1);
                ey = Math.min(ey, y - 1);
                break;
            
            case 8: // 남서
                ex = Math.min(ex, x - 1);
                ey = Math.min(ey, y - 1);
                break;
            
            case 9: // 일치
                sx = Math.max(sx, x);
                ex = Math.min(ex, x);
                sy = Math.max(sy, y);
                ey = Math.min(ey, y);
                break;
        }
        
        // 유효하지 않은 범위 
        if (sx > ex || sy > ey) {
            return 0;
        }
    }

    return (ex - sx + 1) * (ey - sy + 1);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(solution(input));