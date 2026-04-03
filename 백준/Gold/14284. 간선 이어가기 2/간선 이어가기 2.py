'''
순서대로 추가되는 상황에서 s와 t가 연결되는 그 순간 다익스트라 돌리는 것이 아니라
가중치가 최소한이 되는 상태로 연결된 상황을 가정할 수 있도록 간선 추가 순서를 조정한 상태에서의 가중치를 구하는 것
===
최대한 가중치가 낮은 상태로 연결시켜버리는 상태를 상정해서 간선 추가 순서를 조정할 수 있다는 거니
다 추가해서 다익스트라 돌리면 됨
'''
import sys
import heapq
# from collections import deque

# def clearVisited():
#     for n in range(N + 1):
#         visited[n] = 0
#
# def checkConnected():
#     queue = deque([S])
#     visited[S] = 1
#
#     if S == T:
#         return True
#
#     while queue:
#         now = queue.popleft()
#         for next, dist in adjList[now]:
#             if next == T:
#                 return True
#             elif visited[next]:
#                 continue
#             visited[next] = 1
#             queue.append(next)
#
#     return False

def dijkstra():
    dist = [100000001] * (N + 1)
    dist[S] = 0

    heap = [(0, S)]

    while heap:
        nowDist, now = heapq.heappop(heap)
        if dist[now] < nowDist:
            continue

        for next, nextDist in adjList[now]:
            tempDist = nowDist + nextDist
            if dist[next] < tempDist:
                continue
            dist[next] = tempDist
            heapq.heappush(heap, (tempDist, next))

    print(dist[T])

#########################################################################

N, M = map(int, sys.stdin.readline().split())

adjList = [[] for _ in range(N + 1)]
for m in range(M):
    a, b, w = map(int, sys.stdin.readline().split())
    adjList[a].append((b, w))
    adjList[b].append((a, w))

S, T = map(int, sys.stdin.readline().split())

dijkstra()
