const sol = (input) => {
    const T = Number(input[0]);
    let idx = 1;

    const res = [];

    for (let tc = 0; tc < T; tc++) {
        const N = Number(input[idx++]);
        const adjInfo = input[idx++].split(' ').map(Number);
    
        const adjL = Array.from({ length: N + 1 }, () => Array());
        for (let l = 0; l < N; l++) adjL[l + 1].push(adjInfo[l]);
    
        let cnt = 0;
        const visited = Array(N + 1).fill(false);
        for (let s = 1; s < N + 1; s++) {
            if (!visited[s]) {
                cnt++;
                dfs(s, visited, adjL)
            }
        }
    
        res.push(cnt);  
    }

    console.log(res.join('\n'))
}

const dfs = (s, visited, adjL) => {
    visited[s] = true;
    
    const stack = [s];
    
    let now = s;
    while (true) {
        let bool = false;
        
        for (let a = 0; a < adjL[now].length; a++) {
            const next = adjL[now][a];
            
            if (!visited[next]) {
                stack.push(now);
                now = next;
                visited[next] = true;
                bool = true;
                break;
            }
        }
        
        if (!bool) {
            if (stack.length > 0) {
                now = stack.pop();
            } else {
                return;
            }
        }
    }
    
    return;
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

sol(input);