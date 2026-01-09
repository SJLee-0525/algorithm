const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, K] = input[0].trim().split(' ').map(Number);
    const arr = input[1].trim().split(' ').map(Number);

    // 값 v가 현재 어디에 있는지 기록
    const pos = Array(N);
    for (let i = 0; i < N; i++) {
        pos[arr[i]] = i;
    };

    // 값 v는 최종적으로 v번 인덱스에 가야 함.
    // swap이 i <-> i+K만 가능하므로, 인덱스의 (mod K) 그룹은 유지됨.
    for (let v = 0; v < N; v++) {
        if (pos[v] % K !== v % K) return 'No';
    };

    return 'Yes';
};

console.log( solution(input) );
