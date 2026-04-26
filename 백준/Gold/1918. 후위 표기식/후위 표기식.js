const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const solution = (input) => {
  let [result, store] = ["", []];

  input.map((v) => {
    if (/[A-Z]/.test(v)) result += v;
    else {
      if (v === "(") store.push(v);
      else {
        while (store.length) {
          let storeEndV = store[store.length - 1];

          if (storeEndV === "(") break;
          else if (v === "+" || v === "-") {
            if (storeEndV === "(") break;
          } else if (v === "*" || v === "/") {
            if (storeEndV !== "*" && storeEndV !== "/") break;
          }

          result += store.pop();
        }

        if (v === ")") store.pop();
        else store.push(v);
      }
    }
  });

  result = [...result, ...store.reverse()];
  return result.join("");
};

console.log(solution(input));
