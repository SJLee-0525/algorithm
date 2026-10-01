function solution(citations) {
    const M = Math.max(...citations);

    const nums = Array.from({ length: M + 1 }, () => [0, 0]);

    for (const c of citations) {
        nums[c][0]++;
        nums[c][1]++;
    };

    for (let i = 1; i <= M; i++) {
        nums[i][0] += nums[i - 1][0];
        nums[M - i][1] += nums[M - i + 1][1];
    };

    for (let h = M; h >= 1; h--) {
        if (nums[h][1] >= h) return h;
    };

    return 0;
};