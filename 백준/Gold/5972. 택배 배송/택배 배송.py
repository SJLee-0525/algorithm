import sys, heapq

def dijkstra(start):
    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))
    encounted[start] = 0

    while priorityQueue:
        curr_encounted, now = heapq.heappop(priorityQueue)
        for nextInfo in adjL[now]:
            nextLoc, nextCow = nextInfo
            if encounted[nextLoc] > curr_encounted + nextCow:
                next_encounted = curr_encounted + nextCow
                encounted[nextLoc] = next_encounted
                heapq.heappush(priorityQueue, (next_encounted, nextLoc))

    # print(encounted)
    return encounted[N]

#################################################################

N, M = map(int, sys.stdin.readline().split()) # N개의 헛간, M개의 길
adjL = [[] for _ in range(N + 1)]

for _ in range(M):
    v1, v2, cows = map(int, sys.stdin.readline().split())
    adjL[v1].append((v2, cows))
    adjL[v2].append((v1, cows))

encounted = [100000001] * (N + 1)

print(dijkstra(1))