import sys

def f(lev, N, M):
    if lev == M:
        result.append(path[:])
        return

    temp_used = []
    for i in range(N):
        if arr[i] in temp_used or (len(path) >= 1 and path[-1] > arr[i]):
            continue
        path.append(arr[i])
        temp_used.append(arr[i])
        f(lev + 1, N, M)
        path.pop()

N, M = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()

path = []
result = []

f(0, N, M)

for r in result:
    print(*r)