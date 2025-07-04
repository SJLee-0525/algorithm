const solution = (input) => {
    const T = Number(input[0]);

    const res = [];
    let idx = 1;
    for (let tc = 0; tc < T; tc++) {
        const [N, D] = input[idx++].split(' ').map(Number);
        
        const arr = [];
        for (let n = 0; n < N; n++) arr.push(input[idx++].split(' ').map(Number));

        res.push(rotate(N, D, arr));
    }

    console.log(res.join('\n'));
}

const rotate = (N, D, arr) => {
    const garo = Array(N).fill(null), 
    cross1 = Array(N).fill(null), 
    sero = Array(N).fill(null), 
    cross2 = Array(N).fill(null);
    
    const mid = Math.floor(N / 2);
    for (let n = 0; n < N; n++) {
        garo[n] = arr[mid][n];
        cross1[n] = arr[n][n];
        sero[n] = arr[n][mid];
        cross2[n] = arr[n][N - n - 1];
    }
    
    const prompt = (D + 360) % 360;
    switch (prompt) {
        case 45: 
            for (let n = 0; n < N; n++) {
                if (n === mid) continue;

                arr[n][n] = garo[n];
                arr[n][mid] = cross1[n];
                arr[n][N - n - 1] = sero[n];
                arr[mid][N - n - 1] = cross2[n];
            }
            break;
        
        case 90:
            for (let n = 0; n < N; n++) {
                if (n === mid) continue;

                arr[n][mid] = garo[n];
                arr[n][N - n - 1] = cross1[n];
                arr[mid][N - n - 1] = sero[n];
                arr[N - n - 1][N - n - 1] = cross2[n];
            }
            break;

        case 135:
            for (let n = 0; n < N; n++) {
                if (n === mid) continue;

                arr[n][N - n - 1] = garo[n];
                arr[mid][N - n - 1] = cross1[n];
                arr[N - n - 1][N - n - 1] = sero[n];
                arr[N - n - 1][mid] = cross2[n];
            }
            break;

        case 180:
            for (let n = 0; n < N; n++) {
                if (n === mid) continue;

                arr[mid][N - n - 1] = garo[n];
                arr[N - n - 1][N - n - 1] = cross1[n];
                arr[N - n - 1][mid] = sero[n];
                arr[N - n - 1][n] = cross2[n];
            }
            break;

        case 225:
            for (let n = 0; n < N; n++) {               
                if (n === mid) continue;

                arr[N - n - 1][N - n - 1] = garo[n];
                arr[N - n - 1][mid] = cross1[n];
                arr[N - n - 1][n] = sero[n];
                arr[mid][n] = cross2[n];
            }
            break;

        case 270:
            for (let n = 0; n < N; n++) {
                if (n === mid) continue;

                arr[N - n - 1][mid] = garo[n];
                arr[N - n - 1][n] = cross1[n];
                arr[mid][n] = sero[n];
                arr[n][n] = cross2[n];
            }
            break;

        case 315:
            for (let n = 0; n < N; n++) {
                if (n === mid) continue;
                
                arr[N - n - 1][n] = garo[n];
                arr[mid][n] = cross1[n];
                arr[n][n] = sero[n];
                arr[n][mid] = cross2[n];
            }
            break;

        default:
    }

    const ret = arr.map((a) => a.join(' ')).join('\n');
    return ret;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);