import sys, heapq

def prim(start):
    totalMaintenance = 0
    homes = [0] * (N + 1)

    heap = []
    heapq.heappush(heap, (0, start))
    maxMaintenance = 0

    while heap:
        curMaintenance, curHome = heapq.heappop(heap)
        if homes[curHome]:
            continue
        homes[curHome] = 1
        totalMaintenance += curMaintenance
        maxMaintenance = max(maxMaintenance, curMaintenance)

        for nextHome, nextMaintenance in adjHomes[curHome]:
            if homes[nextHome]:
                continue
            heapq.heappush(heap, (nextMaintenance, nextHome))

    return totalMaintenance - maxMaintenance

######################################################################

N, M = map(int, sys.stdin.readline().split()) # 집의 개수, 길의 개수

adjHomes = [[] for _ in range(N + 1)]

for _ in range(M):
    h1, h2, maintenance = map(int, sys.stdin.readline().split())
    adjHomes[h1].append((h2, maintenance))
    adjHomes[h2].append((h1, maintenance))

print(prim(1))