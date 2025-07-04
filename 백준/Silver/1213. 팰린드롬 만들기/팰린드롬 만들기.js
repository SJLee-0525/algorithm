const solution = (name) => {
    const arr = Array(26).fill(0);
    name.forEach((char) => {
        arr[char.charCodeAt() - 65]++;
    })

    if (name.length % 2 === 0) {
        for (let i = 0; i < 26; i++) if (arr[i] % 2 === 1) return "I'm Sorry Hansoo";
    } else {
        let cnt = 0;
        for (let i = 0; i < 26; i++) if (arr[i] % 2 === 1) cnt++;
        if (cnt !== 1) return "I'm Sorry Hansoo";
    }

    const ret = Array(name.length).fill(null);
    let left = 0;
        right = name.length - 1;
    
    while (left < right) {
        let cur = 0;
        while (arr[cur] < 2) cur++;
        
        const char = String.fromCharCode(cur + 65);
        ret[left++] = char;
        ret[right--] = char;
        arr[cur] -= 2;
    }

    let cur2 = 0;
    if (name.length % 2 === 1) {
        while (arr[cur2] < 1) cur2++;

        ret[Math.floor(name.length / 2)] = String.fromCharCode(cur2 + 65);
        arr[cur2]--;
    }

    return ret.join('');
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const name = fs.readFileSync('/dev/stdin').toString().trim().split('');

console.log(
    solution(name)
);