const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const voc = {
  e: "i",
  i: "e",
  E: "I",
  I: "E",
};

const solution = (input) => {
  const res = Array();

  for (let i = 0; i < input.length; i++) {
    const word = input[i].trim().split("");

    for (let w = 0; w < word.length; w++) {
      if (voc[word[w]]) word[w] = voc[word[w]];
    }

    res.push(word.join(""));
  }

  console.log(res.join("\n"));
};

solution(input);
