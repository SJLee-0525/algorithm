const Dict = {
  CU: "see you",
  ":-)": "I’m happy",
  ":-(": "I’m unhappy",
  ";-)": "wink",
  ":-P": "stick out my tongue",
  "(~.~)": "sleepy",
  TA: "totally awesome",
  CCC: "Canadian Computing Competition",
  CUZ: "because",
  TY: "thank-you",
  YW: "you’re welcome",
  TTYL: "talk to you later",
};

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.trim());

const res = Array();

for (const line of input) {
  if (Dict[line]) res.push(Dict[line]);
  else res.push(line);
}

console.log(res.join("\n"));
