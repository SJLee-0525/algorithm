import sys

def comb(n, N, M):
    if n == N:
        if len(path) == M:
            rst.add(tuple(path))
        return

    for i in range(N):
        if len(path) >= 1 and arr[i] < path[-1]:
            continue
        path.append(arr[i])
        comb(n + 1, N, M)
        path.pop()

    comb(n + 1, N, M)

##############################################################

N, M = map(int, sys.stdin.readline().split())

arr = list(range(1, N + 1))
path = []
rst = set()
comb(0, N, M)

rst = list(rst)
rst.sort()

for r in rst:
    print(*r)