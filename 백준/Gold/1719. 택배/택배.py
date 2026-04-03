import sys, heapq

def dijkstra(start):
    path = [0] * (N + 1)
    
    dist = [100000001] * (N + 1)
    dist[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start))

    while priorityQueue:
        currDist, *currInfo = heapq.heappop(priorityQueue)
        if dist[currInfo[0]] < currDist:
            continue

        for nextNode, nextDist in adjL[currInfo[0]]:
            tempDist = currDist + nextDist
            if dist[nextNode] > tempDist:
                dist[nextNode] = tempDist
                if len(currInfo) == 1:
                    path[nextNode] = nextNode
                    heapq.heappush(priorityQueue, (tempDist, nextNode, nextNode))
                else:
                    path[nextNode] = currInfo[1]
                    heapq.heappush(priorityQueue, (tempDist, nextNode, currInfo[1]))

    result = ''
    for nd in range(1, N + 1):
        if start == nd:
            result += '- '
        else:
            result += str(path[nd]) + ' '
    print(result)
    
###########################################################

N, M = map(int, sys.stdin.readline().split())

adjL = [[] for _ in range(N + 1)]
for _ in range(M):
    v1, v2, d = map(int, sys.stdin.readline().split())
    adjL[v1].append((v2, d))
    adjL[v2].append((v1, d))

for start in range(1, N + 1):
    dijkstra(start)