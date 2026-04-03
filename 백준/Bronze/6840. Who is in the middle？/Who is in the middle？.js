let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

// Array.prototype.sort()는 기본적으로 문자열 기반 정렬을 수행합니다.
// 숫자 정렬을 하려면 비교 함수를 sort()에 전달해야 합니다:
const sortedInput = input.sort((a, b) => a - b)
console.log(sortedInput[1])
