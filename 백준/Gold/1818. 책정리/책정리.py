import sys, bisect

N = int(sys.stdin.readline())
books = list(map(int, sys.stdin.readline().split()))

DP = []
for i in range(N):
    if not DP:
        DP.append(books[i])
    if DP[-1] < books[i]:
        DP.append(books[i])
    else:
        idx = bisect.bisect_left(DP, books[i])
        DP[idx] = books[i]

print(N - len(DP))