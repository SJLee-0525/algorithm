import sys, heapq

def findStarts():
    for work in range(1, N + 1):
        if not needWorks[work]:
            starts.append(work)
            results[work] = needTimes[work]

def dijkstra():
    complete = 0
    priorityQueue = []
    for start in starts:
        complete += 1
        heapq.heappush(priorityQueue, (needTimes[start], start))

    while priorityQueue:
        currTime, currWork = heapq.heappop(priorityQueue)
        if results[currWork] > currTime:
            continue
        for adjWork in adjWorks[currWork]:
            if needWorks[adjWork] > 0:
                needWorks[adjWork] -= 1
                if needWorks[adjWork] > 0:
                    continue

            nextTime = currTime + needTimes[adjWork]
            if needWorks[adjWork] == 0 and results[adjWork] <= nextTime:
                results[adjWork] = nextTime
                heapq.heappush(priorityQueue, (nextTime, adjWork))

    return max(results)

#########################################################################

N = int(sys.stdin.readline()) # 작업의 수

needTimes = [0] * (N + 1)
needWorks = [0] * (N + 1)
adjWorks = [[] for _ in range(N + 1)]
for workNum in range(1, N + 1):
    needTime, needWorkCnt, *args = map(int, sys.stdin.readline().split())
    needTimes[workNum] = needTime
    for w in range(needWorkCnt):
        adjWorks[args[w]].append(workNum)
        needWorks[workNum] += 1

# print(needTimes)
# print(needWorks)
# print(adjWorks)

starts = []
results = [0] * (N + 1)

findStarts()
print(dijkstra())
# print(results)

