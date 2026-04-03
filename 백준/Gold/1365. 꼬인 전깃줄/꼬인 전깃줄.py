import sys, bisect

N = int(sys.stdin.readline())
lines = list(map(int, sys.stdin.readline().split()))

DP = []
for i in range(N):
    if not DP:
        DP.append(lines[i])
    if DP[-1] < lines[i]:
        DP.append(lines[i])
    else:
        idx = bisect.bisect_left(DP, lines[i])
        DP[idx] = lines[i]

print(N - len(DP))