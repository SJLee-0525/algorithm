const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();
  for (let i = 0; i < 3; i++) {
    const [SH, SM, SS, EH, EM, ES] = input[i].trim().split(" ").map(Number);

    const startTime = SH * 3600 + SM * 60 + SS;
    const endTime = EH * 3600 + EM * 60 + ES;

    const workTime = endTime - startTime;
    const workHour = Math.floor(workTime / 3600);
    res.push(`${workHour} ${Math.floor((workTime - workHour * 3600) / 60)} ${workTime % 60}`);
  }

  console.log(res.join("\n"));
};

solution(input);
