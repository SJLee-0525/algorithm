import sys
import math

N = int(sys.stdin.readline())
DP = [0] * (N + 1)

for i in range(1, N + 1):
    minValue = 1e9
    for j in range(1, int(math.sqrt(i)) + 1):
        minValue = min(minValue, DP[i - j**2])
    DP[i] = minValue + 1

print(DP[N])