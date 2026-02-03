const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();

  for (let i = 0; i < input.length - 1; i++) {
    const [name, age, weight] = input[i].trim().split(" ");

    if (Number(age) > 17 || Number(weight) >= 80) res.push(`${name} Senior`);
    else res.push(`${name} Junior`);
  }

  console.log(res.join("\n"));
};

solution(input);
