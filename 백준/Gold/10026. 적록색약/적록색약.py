import sys
import copy
from collections import deque

def find_start(N):
    cnt = 0
    for i in range(N):
        for j in range(N):
            if pic[i][j] != 0:
                DFS(i, j, N, pic[i][j])
                cnt += 1
    return cnt

def find_start_blindness(N):
    cnt = 0
    for i in range(N):
        for j in range(N):
            if blindness_pic[i][j] != 0:
                DFS_blindness(i, j, N, blindness_pic[i][j])
                cnt += 1
    return cnt

def DFS(si, sj, N, color):
    visited = [[0] * N for _ in range(N)]
    stack = []

    di = [1, 0, -1, 0]
    dj = [0, 1, 0, -1]

    visited[si][sj] = 1
    pic[si][sj] = 0
    i, j = si, sj
    while 1:
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < N and visited[mi][mj] == 0 and pic[mi][mj] == color:
                stack.append((i, j))
                i, j = mi, mj
                visited[i][j] = 1
                pic[i][j] = 0
                break
        else:
            if stack:
                i, j = stack.pop()
            else:
                return

def DFS_blindness(si, sj, N, color):
    visited = [[0] * N for _ in range(N)]
    stack = []

    di = [1, 0, -1, 0]
    dj = [0, 1, 0, -1]

    visited[si][sj] = 1
    blindness_pic[si][sj] = 0
    i, j = si, sj
    while 1:
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < N and visited[mi][mj] == 0 and blindness_pic[mi][mj] == color:
                stack.append((i, j))
                i, j = mi, mj
                visited[i][j] = 1
                blindness_pic[i][j] = 0
                break
        else:
            if stack:
                i, j = stack.pop()
            else:
                return
#############################################################

N = int(sys.stdin.readline())

pic = [list(sys.stdin.readline().rstrip()) for _ in range(N)]
blindness_pic = copy.deepcopy(pic)
for i in range(N):
    for j in range(N):
        if blindness_pic[i][j] == "R":
            blindness_pic[i][j] = "G"

print(find_start(N), end=' ')
print(find_start_blindness(N))