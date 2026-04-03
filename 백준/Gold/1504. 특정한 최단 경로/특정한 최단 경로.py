import sys
import heapq

def dijkstra(start, end):
    dist = [1000000001] * (N + 1)
    dist[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while priorityQueue:
        curr_dist, now = heapq.heappop(priorityQueue)
        if curr_dist > dist[now]:
            continue

        for next_info in adjL[now]:
            next_node, next_dist = next_info
            new_dist = curr_dist + next_dist
            if dist[next_node] > new_dist:
                dist[next_node] = new_dist
                heapq.heappush(priorityQueue, (new_dist, next_node))

    return dist[end]

#########################################################################

N, E = map(int, sys.stdin.readline().split())
adjL = [[] for _ in range(N + 1)]

for _ in range(E):
    a, b, d = map(int, sys.stdin.readline().split())
    adjL[a].append((b, d))
    adjL[b].append((a, d))

v1, v2 = map(int, sys.stdin.readline().split()) # 반드시 거쳐야 하는 두 정점


case1 = dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, N)
case2 = dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, N)

result = min(case1, case2)
if result >= 1000000001:
    result = -1

print(result)