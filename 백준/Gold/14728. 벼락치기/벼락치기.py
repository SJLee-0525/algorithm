import sys

N, T = map(int, sys.stdin.readline().split())

# 예상 공부 시간, 배점
DP = [[0] * (T + 1) for _ in range(N)]
for i in range(N):
    time, score = map(int, sys.stdin.readline().split())
    for j in range(1, T + 1):
        DP[i][j] = DP[i - 1][j]
        if j - time >= 0:
            DP[i][j] = max(DP[i - 1][j], DP[i - 1][j - time] + score)

print(DP[-1][-1])

