import sys, heapq

def dijkstra(start):
    timeSpend[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while(priorityQueue):
        currTime, now = heapq.heappop(priorityQueue)
        for nextInfo in adjTown[now]:
            nextTown, nextTime = nextInfo
            tempTime = currTime + nextTime
            if timeSpend[nextTown] > tempTime:
                timeSpend[nextTown] = tempTime
                heapq.heappush(priorityQueue, (tempTime, nextTown))

    # print(timeSpend)

def dijkstraRev(start):
    timeSpendRev[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while(priorityQueue):
        currTime, now = heapq.heappop(priorityQueue)
        for nextInfo in adjTownRev[now]:
            nextTown, nextTime = nextInfo
            tempTime = currTime + nextTime
            if timeSpendRev[nextTown] > tempTime:
                timeSpendRev[nextTown] = tempTime
                heapq.heappush(priorityQueue, (tempTime, nextTown))

    # print(timeSpendRev)

##########################################################

# N명의 학생, M개의 단방향 도로, X번 마을에서 파티
N, M, X = map(int, sys.stdin.readline().split())

adjTown = [[] for _ in range(N + 1)]
adjTownRev = [[] for _ in range(N + 1)]
timeSpend = [100000001] * (N + 1)
timeSpendRev = [100000001] * (N + 1)

for _ in range(M):
    # 파티하는 곳에서 출발할거라 역방향을 정방향이라 생각할거임
    t1, t2, time = map(int, sys.stdin.readline().split())
    adjTown[t2].append((t1, time))
    adjTownRev[t1].append((t2, time))

dijkstra(X)
dijkstraRev(X)

for i in range(1, N + 1):
    timeSpend[i] += timeSpendRev[i]

print(max(timeSpend[1:]))

