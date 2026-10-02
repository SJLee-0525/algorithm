function solution(s) {
    const sortedNums = s.split(' ').map(Number).sort((a, b) => b - a);
    return [sortedNums[sortedNums.length - 1], sortedNums[0]].join(' ');
}