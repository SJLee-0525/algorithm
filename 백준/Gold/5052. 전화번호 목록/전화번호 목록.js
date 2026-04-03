class Node {
  constructor(value = "") {
    this.value = value;
    this.child = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let curNode = this.root;

    for (let i = 0; i < str.length; i++) {
      const curChar = str[i];
      if (curNode.child[curChar] === undefined) {
        curNode.child[curChar] = new Node(curChar);
      }

      curNode = curNode.child[curChar];
      if (curNode.isEnd === true) {
        return false;
      }
    }
    curNode.isEnd = true;
    return true;
  }
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace("\r", "")
  .trim()
  .split("\n");

let idx = 0;

const T = Number(input[idx++]);
const results = [];

for (let tc = 1; tc <= T; tc++) {
  const trieTree = new Trie();

  const N = Number(input[idx++]);
  const inputArr = [];

  for (let n = 0; n < N; n++) {
    const inputStr = input[idx++].trim();
    inputArr.push(inputStr);
  }

  inputArr.sort((a, b) => {
    // 1. 문자열 길이 기준으로 정렬 (오름차순)
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    // 2. 길이가 같다면 알파벳 순 정렬
    return a.localeCompare(b);
  });

  let boolean = true;
  for (let n = 0; n < N; n++) {
    boolean = trieTree.insert(inputArr[n]);
    if (!boolean) {
      break;
    }
  }

  if (boolean) {
    results.push("YES");
  } else {
    results.push("NO");
  }
}

console.log(results.join("\n"));
