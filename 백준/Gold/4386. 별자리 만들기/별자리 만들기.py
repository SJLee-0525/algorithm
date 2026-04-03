import sys, heapq

def prim():
    heap = [(0, 0)]
    visited = [0] * N

    sumWeight = 0

    while heap:
        currWeight, currStar = heapq.heappop(heap)
        if visited[currStar]:
            continue

        visited[currStar] = 1
        sumWeight += currWeight

        for nextStar in adjStars[currStar]:
            if visited[nextStar[0]]:
                continue
            heapq.heappush(heap, (nextStar[1], nextStar[0]))

    print(sumWeight)

##########################################################

N = int(sys.stdin.readline())
stars = []
for _ in range(N):
    x, y = map(float, sys.stdin.readline().split())
    stars.append((x, y))

adjStars = [[] for _ in range(N)]
for s1 in range(N):
    for s2 in range(N):
        if s1 == s2:
            continue
        adjStars[s1].append((s2, ((stars[s1][0] - stars[s2][0]) ** 2 + (stars[s1][1] - stars[s2][1]) ** 2) ** 0.5))

prim()