const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());
const MOD = 1000000007n;

const solution = (N) => {
    // 인덱스 매핑
    const G = 0, A1 = 1, A2 = 2, B = 3;
    
    let cur = Array.from({ length: 4 }, () => [0n, 0n]); // [state][k]
    cur[G][0] = 1n;   // i = 1
    
    for (let i = 2; i <= N; i++) {
      let nxt = Array.from({ length: 4 }, () => [0n, 0n]);
    
      // G → 0,1,2
      for (let k = 0; k < 2; k++) {
        nxt[G][k]   = (nxt[G][k]   + cur[G][k]) % MOD;           // 0
        nxt[A1][k]  = (nxt[A1][k]  + cur[G][k]) % MOD;           // 1
        nxt[A2][1]  = (nxt[A2][1]  + cur[G][k]) % MOD;           // 2
      }
    
      // A1 → 0 / 1 / 2
      for (let k = 0; k < 2; k++) {
        nxt[G][k]   = (nxt[G][k]   + cur[A1][k]) % MOD;          // 0
        nxt[B][k]   = (nxt[B][k]   + cur[A1][k]) % MOD;          // 1
        nxt[B][1]   = (nxt[B][1]   + cur[A1][k]) % MOD;          // 2
      }
    
      // A2 → 0 / 1
      for (let k = 0; k < 2; k++) {
        nxt[G][k]   = (nxt[G][k]   + cur[A2][k]) % MOD;          // 0
        nxt[B][k]   = (nxt[B][k]   + cur[A2][k]) % MOD;          // 1
      }
    
      // B → 0
      for (let k = 0; k < 2; k++) {
        nxt[G][k]   = (nxt[G][k]   + cur[B][k]) % MOD;           // 0
      }
    
      cur = nxt;
    }
    
    let ans = 0n;
    for (let s = 0; s < 4; s++) ans = (ans + cur[s][1]) % MOD;
    console.log(ans.toString());
}

solution(N);