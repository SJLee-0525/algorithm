function solution(sizes) {
    let maxX = 0, maxY = 0;
    for (const size of sizes) {
        const [x, y] = size.sort((a, b) => a - b);
        if (maxX < x) maxX = x;
        if (maxY < y) maxY = y;
    };
    return maxX * maxY;
}