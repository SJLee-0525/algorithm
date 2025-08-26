// 남동북서
// 서북동남
const DI = [0, -1, 0, 1];
const DJ = [-1, 0, 1, 0];

const solution = (input) => {
    const [M, N] = input[0].split(' ').map(Number);
    
    const CASTLE = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
    const ROOMS = Array.from({ length: N }, () => Array(M).fill(0));

    const ROOMSIZES = new Map();
    let roomNum = 1;

    let maxRoomSize = -1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (ROOMS[i][j] === 0) {
                const roomSize = dfs(i, j, roomNum, CASTLE, ROOMS, N, M);
                ROOMSIZES.set(roomNum, roomSize)
                roomNum++;

                if (maxRoomSize < roomSize) maxRoomSize = roomSize;
            }
        }
    }

    // console.log(ROOMS.map(r => r.join(' ')).join('\n'))
    // console.log(ROOMSIZES);

    let mergedMaxRoomSize = -1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = 0; k < 4; k++) {
                const ni = i + DI[k], nj = j + DJ[k];

                if (0 <= ni && ni < N && 0 <= nj && nj < M && 
                    ROOMS[i][j] !== ROOMS[ni][nj] && mergedMaxRoomSize < ROOMSIZES.get(ROOMS[i][j]) + ROOMSIZES.get(ROOMS[ni][nj])) {     
                    mergedMaxRoomSize = ROOMSIZES.get(ROOMS[i][j]) + ROOMSIZES.get(ROOMS[ni][nj]);
                }
            }
        }
    }

    console.log(roomNum - 1);
    console.log(maxRoomSize);
    console.log(mergedMaxRoomSize);
}

const dfs = (i, j, roomNum, CASTLE, ROOMS, N, M) => {
    let cnt = 1;

    ROOMS[i][j] = roomNum;

    for (let k = 0; k < 4; k++) {
        const ni = i + DI[k], nj = j + DJ[k];

        if (ni < 0 || N <= ni || nj < 0 || M <= nj ||
        (CASTLE[i][j] & (1 << k)) !== 0 || ROOMS[ni][nj] !== 0) continue;

        cnt += dfs(ni, nj, roomNum, CASTLE, ROOMS, N, M);   
    }

    return cnt;
}

// ------------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);