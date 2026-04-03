import sys
from collections import deque

def DFS(N, v):
    visited = [0] * (N + 1)
    stack = []
    i = v
    print(i, end=' ')
    visited[i] = 1
    while 1:
        for w in adjL[i]:
            if visited[w] == 0:
                stack.append(i)
                i = w
                print(i, end=' ')
                visited[i] = 1
                break
        else:
            if stack:
                i = stack.pop()
            else:
                print()
                return

def BFS(N, v):
    visited = [0] * (N + 1)
    Q = deque()
    Q.append(v)
    visited[v] = 1
    while Q:
        i = Q.popleft()
        print(i, end=' ')
        for w in adjL[i]:
            if visited[w] == 0:
                Q.append(w)
                visited[w] = 1
    else:
        print()
        return



##################################################################

N, M, v = map(int, sys.stdin.readline().split())
# 정점 개수, 간선 개수, 출발 지점

adjL = [[] for _ in range(N + 1)]

for _ in range(M):
    v1, v2 = map(int, sys.stdin.readline().split())
    adjL[v1].append(v2)
    adjL[v2].append(v1)

# 만약 방문 가능한 정점이 여러개일 경우 정점 번호가 작은 것부터 방문
for i in range(N + 1):
    adjL[i].sort()

DFS(N, v)
BFS(N, v)