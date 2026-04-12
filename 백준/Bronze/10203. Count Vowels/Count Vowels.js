const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const VOWELS = new Set(["a", "e", "i", "o", "u"]);

const solution = ([_, ...arr]) => {
  const res = Array();

  for (let a = 0; a < arr.length; a++) {
    res.push(
      arr[a]
        .trim()
        .split("")
        .reduce((a, c) => {
          if (VOWELS.has(c)) return a + 1;
          return a;
        }, 0),
    );
  }

  console.log(res.map((v, i) => `The number of vowels in ${arr[i]} is ${v}.`).join("\n"));
};

solution(input);
