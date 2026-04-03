import sys, heapq
from collections import deque

def dijkstra():
    heap = [(0, 1)]

    visited = [0] + [100000001] * N
    visited[1] = 0

    prev = [-1] * (N + 1)

    while heap:
        currTime, currCom = heapq.heappop(heap)
        if visited[currCom] < currTime:
            continue

        for next, nextTime in adjC[currCom]:
            tempTime = currTime + nextTime
            if visited[next] > tempTime:
                visited[next] = tempTime
                prev[next] = currCom
                heapq.heappush(heap, (tempTime, next))

    print(N - 1)
    for c in range(2, N + 1):
        print(c, prev[c])

################################################################

N, M = map(int, sys.stdin.readline().split())

adjC = [[] for _ in range(N + 1)]
for _ in range(M):
    c1, c2, t = map(int, sys.stdin.readline().split())
    adjC[c1].append((c2, t))
    adjC[c2].append((c1, t))

dijkstra()