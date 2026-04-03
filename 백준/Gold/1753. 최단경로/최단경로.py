import sys
import heapq

def dijkstra(start):
    dist = [1000000001] * (V + 1)
    dist[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while priorityQueue:
        curr_dist, now = heapq.heappop(priorityQueue)
        if curr_dist > dist[now]:
            continue

        for adjNode in adjL[now]:
            next_node, next_dist = adjNode
            temp_dist = curr_dist + next_dist
            if dist[next_node] > temp_dist:
                dist[next_node] = temp_dist
                heapq.heappush(priorityQueue, (temp_dist, next_node))

    return dist

###############################################################

V, E = map(int, sys.stdin.readline().split()) # 정점 개수, 간선 갯수
start = int(sys.stdin.readline()) # 시작 번호

adjL = [[] for _ in range(V + 1)]

for _ in range(E):
    u, v, w = map(int, sys.stdin.readline().split()) # 출발, 도착, 가중치
    adjL[u].append((v, w))

result_dist = dijkstra(start)

for end in range(1, V + 1):
    if end == start:
        print(0)
    else:
        if result_dist[end] == 1000000001:
            print('INF')
        else:
            print(result_dist[end])