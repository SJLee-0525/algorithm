// 큐 필요 없을 듯 

const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

const solution = (input) => {
    const res = new Array();

    const T = Number(input[0].trim());

    const convert = (elem) => {
        switch (elem) {
            case '@':   // @ => 1: 상근
                return 1;

            case '*':   // * => -2: 불
                return -2;
            
            case '#':   // # => -3: 벽
                return -3;

            default:    // . => 0: 빈 공간
                return 0;
        }
    }

    let idx = 1;
    for (let tc = 0; tc < T; tc++) {
        const [W, H] = input[idx++].trim().split(' ').map(Number);
        
        // 빌딩 구조 변환
        const building = [
            Array(W + 2).fill(-3),
            ...input.slice(idx, idx + H).map((l) => [-3, ...l.trim().split('').map((e) => convert(e)), -3]),
            Array(W + 2).fill(-3),
        ];
        
        res.push( testcase(W, H, building) );

        idx += H;
    }

    console.log(res.join('\n'));
}

const testcase = (W, H, building) => {    
    const stack = new Array(); // 상근이가 갈 위치 담을 스택
    const fire = new Array();  // 다음에 불 날 위치 담을 배열
    
    // bfs 시작 전 전처리
    for (let h = 1; h <= H; h++) {
        for (let w = 1; w <= W; w++) {
            if (building[h][w] === 0) { // 빈 공간일 때
                let isFired = false;

                // 4방향 순회 후 주변에 불 난 곳이 있으면 표시
                for (let k = 0; k < 4; k++) { 
                    if (building[h + DI[k]][w + DJ[k]] === -2) {
                        isFired = true;
                        break;
                    }
                }
                
                // 불 난 곳 있으면 처리 및 fire 배열에 추가 (불 날 예정인 곳: -1)
                if (isFired) {
                    building[h][w] = -1;
                    fire.push([h, w]);
                }
            } else if (building[h][w] === 1) { // 상근이가 위치할 때
                if (h === 1 || h === H || w === 1 || w === W) return '1'; // 건물 출입구라면 바로 1 리턴
                else stack.push([h, w, 1])                                // 아니라면 갈 위치 스택에 추가
            }
        }
    }

    const next = new Array(); // 사ㅇ근이가 다음에 갈 위치 담을 임시 배열
    const newFire = new Array();      // 다음에 불 날 위치 담을 임시 배열

    while (true) {
        while (stack.length) {
            const [i, j, d] = stack.pop();  // 가기로 한 곳에서 하나씩 뽑아옴
            
            for (let k = 0; k < 4; k++) {   // 4방향 순회
                const ni = i + DI[k], nj = j + DJ[k], nd = d + 1;
                
                if (building[ni][nj] !== 0) continue;
                
                // 만약 출발점이면 거리 리턴
                if (building[ni][nj] === 0 && (ni === 1 || ni === H || nj === 1 || nj === W)) return nd.toString();
                
                building[ni][nj] = nd;   // 표시
                next.push([ni, nj, nd]); // 다음에 갈 임시 배열에 추가
            }
        }

        if (!next.length) return 'IMPOSSIBLE';          // 다음에 갈 수 있는 곳이 없다면 불가능
        while (next.length) stack.push( next.pop() );   // 임시 배열에 있는 위치 다 스택에 추가
                
        while (fire.length) {
            const [fi, fj] = fire.pop();  // 다음에 불 날 위치에서 좌표 뽑아옴
    
            for (let k = 0; k < 4; k++) { // 4방향 순회
                const nfi = fi + DI[k], nfj = fj + DJ[k];
    
                if (building[nfi][nfj] >= 0) {  // 빈공간 혹은 상근이가 지나온 공간이라면
                    building[nfi][nfj] = -1;    // 불 날 예정인 위치 표시
                    newFire.push([nfi, nfj]);   // 임시 배열에 추가
                }
            }
    
            building[fi][fj] = -2;  // 처리 완료 후 불남 표시
        }
    
        while (newFire.length) fire.push( newFire.pop() ); // 임시 배열에 있는 위치 다 옮기기
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);