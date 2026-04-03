import sys

N, K = map(int, sys.stdin.readline().split())

DP = [[0] * (K + 1) for _ in range(N + 1)]
for i in range(1, N + 1):
    weight, value = map(int, sys.stdin.readline().split())
    for j in range(1, K + 1):
        DP[i][j] = DP[i - 1][j]
        if j - weight >= 0:
            DP[i][j] = max(DP[i - 1][j], DP[i - 1][j - weight] + value)

print(DP[-1][-1])