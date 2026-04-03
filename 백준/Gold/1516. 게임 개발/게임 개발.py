import sys, heapq
from collections import deque

def initSetting():
    for c in range(1, N + 1):
        if not needBuildingsCnt[c]:
            starts.append(c)
            results[c] = needTimes[c]

def construct():
    priorityQueue = []
    for start in starts:
        heapq.heappush(priorityQueue, (needTimes[start], start))

    while priorityQueue:
        currTime, currBuilding = heapq.heappop(priorityQueue)
      
        if results[currBuilding] > currTime:
            continue
        for adjBuilding in adjBuildings[currBuilding]:
            needBuildingsCnt[adjBuilding] -= 1
            nextTime = results[currBuilding] + needTimes[adjBuilding]
            if results[adjBuilding] <= nextTime and needBuildingsCnt[adjBuilding] <= 0:
                results[adjBuilding] = nextTime
                heapq.heappush(priorityQueue, (nextTime, adjBuilding))

#######################################################

N = int(sys.stdin.readline()) # 건물의 수

adjBuildings = [[] for _ in range(N + 1)]
needBuildingsCnt = [0] * (N + 1)
needTimes = [0] * (N + 1)

for building in range(1, N + 1):
    needTime, *token = map(int, sys.stdin.readline().split())
    needTimes[building] = needTime
    for i in range(len(token)):
        temp = token[i]
        if temp == -1:
            break
        adjBuildings[temp].append(building)
        needBuildingsCnt[building] += 1

# print(needTimes)
# print(adjBuildings)
# print(needBuildingsCnt)

results = [0] * (N + 1)
starts = []
currTime = 0

initSetting()
construct()

for r in range(1, N + 1):
    print(results[r])