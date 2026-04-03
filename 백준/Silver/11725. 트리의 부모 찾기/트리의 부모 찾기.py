import sys
from collections import deque

def bfs(V):
    visited = [0] * (N + 1)
    Q = deque()
    Q.append(V)
    visited[V] = 1
    while Q:
        v = Q.popleft()
        for w in adjL[v]:
            if visited[w] == 0:
                Q.append(w)
                visited[w] = 1
                adjP[w] = v

#####################################################

N = int(sys.stdin.readline())

adjL = [[] for _ in range(N + 1)]
adjP = [0] * (N + 1)

for _ in range(N - 1):
    v1, v2 = map(int, sys.stdin.readline().split())
    adjL[v1].append(v2)
    adjL[v2].append(v1)

bfs(1)

for i in range(2, N + 1):
    print(adjP[i])