const arr = Array(10001).fill(0);

const res = []

for (let n = 1; n < 10001; n++) {
    if (arr[n] === 0) res.push(n);

    let temp = n;
    for (const t of temp.toString()) temp += Number(t);
    arr[temp] += 1;
}

console.log(res.join('\n'))