function solution(n, left, right) {
    return Array.from(
        { length: right - left + 1 },
        (_, i) => {
            const p = left + i;
            return Math.max(Math.floor(p / n), p % n) + 1;
        }
    );
};