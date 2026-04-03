import sys, heapq

def prim(start):
    com = [0] * (N + 1)
    totalCost = 0

    heap = []
    heapq.heappush(heap, (0, start))

    while heap:
        nowCost, nowCom = heapq.heappop(heap)
        if com[nowCom]:
            continue
        com[nowCom] = 1
        totalCost += nowCost

        for nextCom, nextCost in adjCom[nowCom]:
            if com[nextCom]:
                continue
            heapq.heappush(heap, (nextCost, nextCom))

    return totalCost

###################################################################

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

adjCom = [[] for _ in range(N + 1)]

for _ in range(M):
    c1, c2, cost = map(int, sys.stdin.readline().split())
    adjCom[c1].append((c2, cost))
    adjCom[c2].append((c1, cost))

print(prim(1))
