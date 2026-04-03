import sys, heapq

def prim():
    heap = [(0, 0)]
    visited = [0] * N
    totalValue = 0

    while heap:
        currVal, currPlanet = heapq.heappop(heap)
        if visited[currPlanet]:
            continue

        visited[currPlanet] = 1
        totalValue += currVal

        for nextPlanet, nextVal in adjPlanets[currPlanet]:
            if visited[nextPlanet]:
                continue
            heapq.heappush(heap, (nextVal, nextPlanet))

    print(totalValue)

######################################################################

N = int(sys.stdin.readline()) # 행성 개수

planets = []
for n in range(N):
    x, y, z = map(int, sys.stdin.readline().split())
    planets.append((x, y, z, n)) # x, y, z, 행성 번호

edges = []

# 각 차원(x, y, z)에 대해 정렬하여 인접한 행성 간의 간선 추가
for dim in range(3):    # x, y, z 각각 따로
    planets.sort(key=lambda x:x[dim]) # 해당 차원을 기준으로 정렬
    for i in range(N - 1):
        p1, p2 = planets[i], planets[i + 1] # 인접한 두 행성
        dist = abs(p1[dim] - p2[dim])       # 두 행성 간의 거리 계산
        edges.append((dist, p1[3], p2[3]))  # (거리, 행성1 번호, 행성2 번호) 추가

# print(edges)

adjPlanets = [[] for _ in range(N)]
for dist, p1, p2 in edges:
    adjPlanets[p1].append((p2, dist)) # 양방향 간선
    adjPlanets[p2].append((p1, dist))

# print(adjPlanets)

prim()