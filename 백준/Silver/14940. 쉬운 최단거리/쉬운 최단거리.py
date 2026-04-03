import sys
from collections import deque

def find_start(N, M):
    for i in range(N):
        for j in range(M):
            if map_arr[i][j] == 2:
                return (i, j)

def BFS(si, sj, N, M):
    visited = [[0] * M for _ in range(N)]
    Q = deque()

    di = [1, 0, -1, 0]
    dj = [0, 1, 0, -1]

    visited[si][sj] = 1
    Q.append((si, sj))
    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and map_arr[mi][mj] != 0 and visited[mi][mj] == 0:
                Q.append((mi, mj))
                visited[mi][mj] += visited[i][j] + 1
    return visited

############################################################################

N, M = map(int, sys.stdin.readline().split()) # 세로 가로
map_arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

si, sj = find_start(N, M)
result = (BFS(si, sj, N, M))

for ri in range(N):
    for rj in range(M):
        if map_arr[ri][rj] == 0: # 원래 갈 수 없는 땅이면: 0 출력
            print(result[ri][rj], end=' ')
        else:
            print(result[ri][rj] - 1, end=' ')
            # 출력해야 하는 값이 visited보다 1 큰 상태이므로 1 감소해서 출력,
            # 갈 수는 있으나 도달하지 못하는 곳은 알아서 -1로 변화됨
    print()
