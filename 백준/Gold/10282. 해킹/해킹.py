import sys, heapq

def dijkstra(start):
    requiredTime = [100000001] * (N + 1)
    requiredTime[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while priorityQueue:
        currTime, currCom = heapq.heappop(priorityQueue)
        if requiredTime[currCom] < currTime:
            continue

        for nextCom, nextTime in adjComputers[currCom]:
            tempTime = currTime + nextTime
            if requiredTime[nextCom] > tempTime:
                requiredTime[nextCom] = tempTime
                heapq.heappush(priorityQueue, (tempTime, nextCom))

    count = N + 1
    maxTime = 0
    for i in range(N + 1):
        if requiredTime[i] == 100000001:
            count -= 1
        else:
            maxTime = max(maxTime, requiredTime[i])

    print(count, maxTime)

########################################################################

T = int(sys.stdin.readline())
for tc in range(T):
    N, D, C = map(int, sys.stdin.readline().split())

    adjComputers = [[] for _ in range(N + 1)]
    for _ in range(D):
        c1, c2, time = map(int, sys.stdin.readline().split())
        adjComputers[c2].append((c1, time))

    dijkstra(C)
