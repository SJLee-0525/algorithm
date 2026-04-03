import sys
from collections import deque

def fnd(N, K):
    Q = deque()
    Q.append(N)
    visited = [0] * 100001
    visited[N] = 1
    while Q:
        n = Q.popleft()
        if n == K:
            return visited[n] - 1
        if 0 <= n - 1 and visited[n - 1] == 0:
            Q.append(n - 1)
            visited[n - 1] = visited[n] + 1
        if n + 1 <= 100000 and visited[n + 1] == 0:
            Q.append(n + 1)
            visited[n + 1] = visited[n] + 1
        if n * 2 <= 100000 and visited[n * 2] == 0:
            Q.append(n * 2)
            visited[n * 2] = visited[n] + 1

###########################################################

N, K = map(int, sys.stdin.readline().split())
print(fnd(N, K))