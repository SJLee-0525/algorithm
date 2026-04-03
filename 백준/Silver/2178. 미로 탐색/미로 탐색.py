import sys
from collections import deque

def BFS(N, M):
    visited = [[0] * M for _ in range(N)]
    Q = deque()

    di = [1, 0, -1, 0]
    dj = [0, 1, 0, -1]

    # 문제에서는 1, 1에서 시작한다고 했지만, index 상으로는 0, 0임을 주의
    si, sj = 0, 0
    visited[si][sj] = 1
    Q.append((si, sj))
    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and visited[mi][mj] == 0 and maze[mi][mj] == 1:
                Q.append((mi, mj))
                visited[mi][mj] = visited[i][j] + 1
                if mi == N - 1 and mj == M - 1:
                    return visited[mi][mj]
    else:
        return

#################################################

N, M = map(int, sys.stdin.readline().split())
# 1, 1에서 출발해 N, M으로 도착할 수 있는 최소칸수 확인하기

maze = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]

print(BFS(N, M))

