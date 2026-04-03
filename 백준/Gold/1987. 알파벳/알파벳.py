import sys

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def dfs(i, j):
    global result

    if result < visited[i][j]:
        result = visited[i][j]

    for k in range(4):
        mi, mj = i + di[k], j + dj[k]
        if (0 <= mi < R and 0 <= mj < C
                and not visited[mi][mj] and not used[ord(arr[mi][mj]) - 65]):
            visited[mi][mj] = visited[i][j] + 1
            used[ord(arr[mi][mj]) - 65] = 1
            dfs(mi, mj)
            visited[mi][mj] = 0
            used[ord(arr[mi][mj]) - 65] = 0

###############################################################

R, C = map(int, sys.stdin.readline().split())
arr = [list(sys.stdin.readline().rstrip()) for _ in range(R)]

used = [0] * 26 # ord - 65
visited = [[0] * C for _ in range(R)]

result = 0

used[ord(arr[0][0]) - 65] = 1
visited[0][0] = 1

dfs(0, 0)
print(result)
