import sys
from collections import deque

def BFS(v):
    global visited
    Q = deque()
    visited[v] = 1
    Q.append(v)
    while Q:
        v = Q.popleft()
        for w in adjL[v]:
            if visited[w] == 0:
                Q.append(w)
                visited[w] = 1
    return


######################################################

N, M = map(int, sys.stdin.readline().split())
# 정점 개수 / 간선 개수

adjL = [[] for _ in range(N + 1)]

for _ in range(M):
    v1, v2 = map(int, sys.stdin.readline().split())
    adjL[v1].append(v2)
    adjL[v2].append(v1)

visited = [0] * (N + 1)

cnt = 0
# visited를 순회하며 만약에 방문한 적이 없는 정점을 발견한다면
# 그 정점을 시작점으로 해서 BFS를 돌리고 카운트함
for v in range(1, N + 1):
    if visited[v] == 0:
        cnt += 1
        BFS(v)

print(cnt)