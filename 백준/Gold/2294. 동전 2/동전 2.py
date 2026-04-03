import sys

N, K = map(int, sys.stdin.readline().split())

coins = [int(sys.stdin.readline()) for _ in range(N)]
DP = [0] + [10001] * K

for coin in coins:
    for targetMoney in range(coin, K + 1):
        if DP[targetMoney] > DP[targetMoney - coin] + 1:
            DP[targetMoney] = DP[targetMoney - coin] + 1

if DP[K] == 10001:
    print(-1)
else:
    print(DP[K])