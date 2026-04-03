import sys, pprint
sys.setrecursionlimit(100001)

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def dfs(i, j):
    if (i, j) == (N - 1, M - 1):
        return 1

    if DP[i][j] != -1:
        return DP[i][j]

    DP[i][j] = 0
    for k in range(4):
        mi, mj = i + di[k], j + dj[k]
        if 0 <= mi < N and 0 <= mj < M and arr[i][j] > arr[mi][mj]:
            DP[i][j] += dfs(mi, mj)

    return DP[i][j]

#########################################################################

N, M = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

cnt = 0
DP = [[-1] * M for _ in range(N)]
dfs(0, 0)

print(DP[0][0])