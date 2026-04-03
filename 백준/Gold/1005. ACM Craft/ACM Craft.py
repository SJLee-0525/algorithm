import sys, heapq

def findStarts():
    for n in range(1, N + 1):
        if not needConstructCnts[n]:
            starts.append(n)
            results[n] = needTimes[n]

def dijkstra():
    priorityQueue = []
    for start in starts:
        heapq.heappush(priorityQueue, (results[start], start))

    while priorityQueue:
        currTime, currBuilding = heapq.heappop(priorityQueue)
        if results[currBuilding] > currTime:
            continue
        for adjBuilding in adjBuildings[currBuilding]:
            if needConstructCnts[adjBuilding] > 0:
                needConstructCnts[adjBuilding] -= 1
                if needConstructCnts[adjBuilding] > 0:
                    continue
            nextTime = currTime + needTimes[adjBuilding]
            if needConstructCnts[adjBuilding] == 0 and results[adjBuilding] < nextTime:
                results[adjBuilding] = nextTime
                heapq.heappush(priorityQueue, (nextTime, adjBuilding))

    return results[targetBuilding]

#########################################################################

T = int(sys.stdin.readline())
for tc in range(T):
    N, K = map(int, sys.stdin.readline().split()) # N: 건물 개수, K: 건설 순서 규칙 수

    needTimes = [0] + list(map(int, sys.stdin.readline().split()))
    needConstructCnts = [0] * (N + 1)
    adjBuildings = [[] for _ in range(N + 1)]
    for _ in range(K):
        b1, b2 = map(int, sys.stdin.readline().split())
        adjBuildings[b1].append(b2)
        needConstructCnts[b2] += 1

    targetBuilding = int(sys.stdin.readline())

    starts = []
    results = [0] * (N + 1)
    findStarts()
    print(dijkstra())