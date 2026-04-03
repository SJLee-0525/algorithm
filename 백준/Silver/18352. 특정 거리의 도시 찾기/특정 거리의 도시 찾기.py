import sys
from collections import deque

def bfs(start):
    visited = [0] * (N + 1)
    visited[start] = 1

    queue = deque([start])

    while queue:
        now = queue.popleft()
        if visited[now] > K:
            break

        for next in adjCity[now]:
            if visited[next]:
                continue
            visited[next] = visited[now] + 1
            queue.append(next)

    result = []
    for city, dist in enumerate(visited):
        if dist == K + 1:
            result.append(city)

    result.sort()
    return result

############################################################################

N, M, K, X = map(int, sys.stdin.readline().split())
# N 도시 개수 / M 도로 개수 / K 거리 정보 / X 출발 도시

adjCity = [[] for _ in range(N + 1)]

for _ in range(M):
    A, B = map(int, sys.stdin.readline().split())
    adjCity[A].append(B)

result = bfs(X)

if result:
    for city in result:
        print(city)
else:
    print(-1)