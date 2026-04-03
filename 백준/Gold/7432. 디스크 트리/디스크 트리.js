
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().replaceAll("\r", "").split("\n")

class Trie {
    constructor() {
        this.root = new Map();
    }

    insert(directories) {
        let node = this.root;
        for (const directory of directories) {
            if (!(node.get(directory))) node.set(directory, new Map());
            node = node.get(directory);
        }
    }

    search() {
        function dfs(node, d) {
            for (const directory of [...node.keys()].sort()) {
                res.push(' '.repeat(d) + directory);
                dfs(node.get(directory), d + 1);
            }
        }

        let res = [];
        dfs(this.root, 0);
        return res;
    }
}

function solution() {
    const N = Number(input[0]);
    let trie = new Trie();
    for (let i = 1; i <= N; i++) {
        const directories = input[i].split("\\"); // 경로 구분자 처리
        trie.insert(directories);
    }
    console.log(trie.search().join("\n"));
}

solution();
