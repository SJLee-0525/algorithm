const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const solution = (N) => {
  switch (N) {
    case 0:
      console.log(1);
      break;

    case 1:
      console.log(1);
      break;

    case 2:
      console.log(2);
      break;

    case 3:
      console.log(6);
      break;

    case 4:
      console.log(4);
      break;

    default:
      console.log(0);
  }
};

solution(N);
