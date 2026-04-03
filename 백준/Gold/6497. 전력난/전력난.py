import sys, heapq

def prim(start):
    home = [0] * (M + 1)
    totalCost = 0

    heap = []
    heapq.heappush(heap, (0, start))

    while heap:
        curCost, curHome = heapq.heappop(heap)
        if home[curHome]:
            continue
        home[curHome] = 1
        totalCost += curCost

        for nextHome, nextCost in adjHome[curHome]:
            if home[nextHome]:
                continue
            heapq.heappush(heap, (nextCost, nextHome))

    return totalCost

#######################################################################

while 1:
    M, N = map(int, sys.stdin.readline().split()) # 집 수 / 길 수

    if M == N == 0:
        break

    adjHome = [[] for _ in range(M + 1)]
    originalCost = 0

    for _ in range(N):
        h1, h2, dist = map(int, sys.stdin.readline().split())
        adjHome[h1].append((h2, dist))
        adjHome[h2].append((h1, dist))
        originalCost += dist

    print(originalCost - prim(1))