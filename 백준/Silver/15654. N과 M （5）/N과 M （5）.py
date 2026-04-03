import sys

def f(lev, N):
    if lev == M:
        result.append(path[:])
        return
    for i in range(N):
        if used[i] == 1:
            continue
        path.append(arr[i])
        used[i] = 1
        f(lev + 1, N)
        path.pop()
        used[i] = 0

N, M = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

result = []
path = []
used = [0] * N

f(0, N)

result.sort()

for r in result:
    print(*r)

