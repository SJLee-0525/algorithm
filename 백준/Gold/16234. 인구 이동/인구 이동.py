import sys
from collections import deque

def bfs(si, sj, N, visited):
    visited[si][sj] = 1
    temp = []
    Q = deque()
    Q.append((si, sj))
    temp.append((si, sj))
    pop_sum = arr[si][sj]
    nat_cnt = 1
    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < N and visited[mi][mj] == 0 and L <= abs(arr[i][j] - arr[mi][mj]) <= R:
                visited[mi][mj] = 1
                Q.append((mi, mj))
                temp.append((mi, mj))
                pop_sum += arr[mi][mj]
                nat_cnt += 1

    res_pop = pop_sum // nat_cnt
    for i2, j2 in temp:
        arr[i2][j2] = res_pop

#################################################################################################

N, L, R = map(int, sys.stdin.readline().split()) # 배열 크기, L 이상, R 이하
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

day = 1
while 1:
    visited = [[0] * N for _ in range(N)]
    cnt = 0
    for i in range(N):
        for j in range(N):
            if visited[i][j] == 0:
                cnt += 1
                bfs(i, j, N, visited)

    if cnt == N ** 2:
        break

    day += 1

print(day - 1)