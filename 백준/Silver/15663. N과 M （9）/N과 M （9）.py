import sys

def f(lev, N, M):
    if lev == M:
        result.append(path[:])
        return

    temp_used = []
    for i in range(N):
        if used[i] or arr[i] in temp_used:
            continue
        temp_used.append(arr[i])
        path.append(arr[i])
        used[i] = 1
        f(lev + 1, N, M)
        path.pop()
        used[i] = 0



N, M = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

result = []
path = []
used = [0] * N

f(0, N, M)
result.sort()

for r in result:
    print(*r)