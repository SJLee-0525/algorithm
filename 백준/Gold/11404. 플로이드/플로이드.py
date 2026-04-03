import sys, heapq

def dijkstra(start):
    costs = [100000001] * (N + 1)
    costs[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while priorityQueue:
        currCost, currCity = heapq.heappop(priorityQueue)
        if costs[currCity] < currCost:
            continue

        for adjInfo in adjCities[currCity]:
            nextCity, nextCost = adjInfo
            accumCost = currCost + nextCost
            if costs[nextCity] > accumCost:
                costs[nextCity] = accumCost
                heapq.heappush(priorityQueue, (accumCost, nextCity))

    for n in range(N + 1):
        if costs[n] == 100000001:
            costs[n] = 0

    return costs[1:]

#######################################################

N = int(sys.stdin.readline()) # 도시의 개수
M = int(sys.stdin.readline()) # 버스 노선의 개수

adjCities = [[] for _ in range(N + 1)]

for _ in range(M):
    s, e, c = map(int, sys.stdin.readline().split())
    adjCities[s].append((e, c))

for start in range(1, N + 1):
    result = dijkstra(start)
    print(*result)