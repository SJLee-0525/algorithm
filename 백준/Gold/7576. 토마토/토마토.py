import sys
from collections import deque

def bfs():
    global max_progress
    Q = deque()


    for i in range(N):
        for j in range(M):
            if box[i][j] == 1:
                Q.append((i, j))
                progress[i][j] = 1
            elif box[i][j] == -1:
                progress[i][j] = -1

    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and box[mi][mj] == 0 and progress[mi][mj] == 0:
                Q.append((mi, mj))
                progress[mi][mj] = progress[i][j] + 1
                if max_progress < progress[i][j] + 1:
                    max_progress = progress[i][j] + 1

def init_check():
    for i in range(N):
        for j in range(M):
            if box[i][j] == 0:
                return False
    return True

def check():
    for i in range(N):
        for j in range(M):
            if progress[i][j] == 0:
                return False
    return True

#################################################################################

M, N = map(int, sys.stdin.readline().split())
box = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

progress = [[0] * M for _ in range(N)]
max_progress = 0

if not init_check():
    bfs()
    if check():
        print(max_progress - 1)
    else:
        print(-1)
else:
    print(0)

