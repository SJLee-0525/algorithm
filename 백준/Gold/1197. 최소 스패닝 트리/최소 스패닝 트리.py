import sys, heapq

def prim(start):
    MST = [0] * (V + 1)
    weightSum = 0

    heap = []
    heapq.heappush(heap, (0, start))

    while heap:
        weight, node = heapq.heappop(heap)
        if MST[node]:
            continue

        MST[node] = 1
        weightSum += weight

        for nextNode, nextWeight in adjNode[node]:
            if MST[nextNode]:
                continue
            heapq.heappush(heap, (nextWeight, nextNode))

    return weightSum

####################################################################

V, E = map(int, sys.stdin.readline().split()) # V 정점 개수, E 간선 개수
adjNode = [[] for _ in range(V + 1)]
for _ in range(E):
    v1, v2, weight = map(int, sys.stdin.readline().split())
    adjNode[v1].append((v2, weight))
    adjNode[v2].append((v1, weight))

print(prim(1))