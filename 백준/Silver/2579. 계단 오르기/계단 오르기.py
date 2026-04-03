import sys

N = int(sys.stdin.readline())
stair = [0] * (N + 1)
for n in range(1, N + 1):
    stair[n] = int(sys.stdin.readline())

dp = [0] * (N + 1)
dp[1] = stair[1]
if N >= 2:
    dp[2] = stair[1] + stair[2]
    if N >= 3:
        dp[3] = max(stair[1], stair[2]) + stair[3]
        for i in range(4, N + 1):
            dp[i] = max(dp[i - 3] + stair[i - 1], dp[i - 2]) + stair[i]

print(dp[N])