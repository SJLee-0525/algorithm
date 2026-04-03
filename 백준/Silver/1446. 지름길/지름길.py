import sys, heapq

def dijkstra():
    heap = [(0, 0)]

    distance = [100000001] * (D + 1)
    distance[0] = 0

    while heap:
        currDist, currLoc = heapq.heappop(heap)
        if distance[currLoc] < currDist:
            continue

        for nextLoc, nextDist in adjRoad[currLoc]:
            tempDist = currDist + nextDist
            if distance[nextLoc] > tempDist:
                distance[nextLoc] = tempDist
                heapq.heappush(heap, (tempDist, nextLoc))

        if currLoc < D and distance[currLoc + 1] > currDist + 1:
            distance[currLoc + 1] = currDist + 1
            heapq.heappush(heap, (currDist + 1, currLoc + 1))

    return distance[D]

############################################################################

N, D = map(int, sys.stdin.readline().split()) # 지름길 개수, 고속도로 길이

adjRoad = [[] for _ in range(D + 1)]
for _ in range(N):
    s, e, l = map(int, sys.stdin.readline().split())
    if e > D:
        continue
    adjRoad[s].append((e, l))

result = dijkstra()
print(result)