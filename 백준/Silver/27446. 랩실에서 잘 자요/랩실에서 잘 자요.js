const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, _] = input[0].split(' ').map(Number);

    const arr = Array(N + 1).fill(false);
    input[1].split(' ').forEach((e) => { arr[Number(e)] = true });

    let res = 0;

    for (let s = 1; s < N + 1; s++) {
        if (arr[s]) continue;

        arr[s]= true;

        let temp = 7, i = s + 1, cnt = 1;
        while (i < N + 1 && cnt < 4) {
            if (!arr[i]) {
                arr[i] = true;
                temp += cnt * 2;
                cnt = 1;
            } else cnt++;

            i++;
        }
        
        res += temp;
    }
    
    console.log(res);
}

solution(input);