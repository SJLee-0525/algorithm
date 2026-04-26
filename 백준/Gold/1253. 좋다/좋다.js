const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const n = +input[0];
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const binarySearch = (k) => {
    const list = [...arr.slice(0, k), ...arr.slice(k + 1)];

    let [left, right] = [0, n - 1];
    while (left < right) {
      const mid = list[left] + list[right];
      if (mid === arr[k]) return 1;
      arr[k] > mid ? left++ : right--;
    }

    return 0;
  };

  let result = 0;
  for (let i = 0; i < n; i++) result += binarySearch(i);

  console.log(result);
};

solution(input);
