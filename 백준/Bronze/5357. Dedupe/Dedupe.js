const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();
  const N = Number(input[0].trim());

  function dedupe(words) {
    let ret = words[0];
    for (const word of words) if (ret[ret.length - 1] !== word) ret += word;
    return ret;
  }

  for (let n = 1; n <= N; n++) {
    const words = input[n].trim();
    res.push(dedupe(words));
  }

  console.log(res.join("\n"));
};

solution(input);
