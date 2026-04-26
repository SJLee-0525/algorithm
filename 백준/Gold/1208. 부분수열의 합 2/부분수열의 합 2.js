const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const solution = ([[N, S], I]) => {
  let [Sum, o, M] = [new Map(), 0, ~~(N / 2)];

  const func = (i, sum, x, G) => {
    if (i == x) {
      G(sum);
      return;
    }

    func(i + 1, sum, x, G);
    func(i + 1, sum + I[i], x, G);
  };

  func(0, 0, M, (sum) => Sum.set(sum, (Sum.get(sum) ?? 0) + 1));
  func(M, 0, N, (sum) => (o += Sum.get(S - sum) ?? 0));

  if (!S) --o;
  console.log(o);
};

solution(input);
