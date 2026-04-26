const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const tasks = [];
  let maxDay = 0;

  for (let i = 1; i <= N; i++) {
    const [d, w] = input[i].split(" ").map(Number);
    tasks.push({ d, w });
    if (d > maxDay) maxDay = d;
  }

  // 점수(w) 내림차순으로 정렬
  tasks.sort((a, b) => b.w - a.w);

  // 날짜별 과제 수행 여부를 기록할 배열 (1일부터 maxDay일까지)
  const schedule = new Array(maxDay + 1).fill(0);
  let totalScore = 0;

  for (const task of tasks) {
    // 마감일부터 역순으로 빈 날짜 찾기
    for (let day = task.d; day > 0; day--) {
      if (schedule[day] === 0) {
        schedule[day] = task.w;
        totalScore += task.w;
        break;
      }
    }
  }

  console.log(totalScore);
};

solution(input);
