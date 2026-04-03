import sys
from collections import deque

def find_doyeoun(N, M):
    for i in range(N):
        for j in range(M):
            if campus[i][j] == 'I':
                bfs(i, j)
                return

def bfs(si, sj):
    global cnt
    visited = [[0] * M for _ in range(N)]
    Q = deque()

    Q.append((si, sj))
    visited[si][sj] = 1

    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            # 이동할 위치가 인덱스 벗어나지 않고, 벽이 아니고, 방문한 적이 없으면
            if 0 <= mi < N and 0 <= mj < M and campus[mi][mj] != 'X' and visited[mi][mj] == 0:
                visited[mi][mj] = 1
                Q.append((mi, mj))
                if campus[mi][mj] == 'P': # 사람이 있으면 카운트
                    cnt += 1

#################################################################################

N, M = map(int, sys.stdin.readline().split())
campus = [list(sys.stdin.readline().rstrip()) for _ in range(N)]

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]
cnt = 0

find_doyeoun(N, M)

if cnt == 0:
    print('TT')
else:
    print(cnt)