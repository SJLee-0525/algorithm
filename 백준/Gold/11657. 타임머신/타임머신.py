import sys

def bellmanFord(start):
    dist = [100000001] * (N + 1)
    dist[start] = 0

    for round in range(N):
        for currCity in range(1, N + 1):
            for nextCity, needTime in adjL[currCity]:
                if dist[currCity] != 100000001 and dist[nextCity] > dist[currCity] + needTime:
                    dist[nextCity] = dist[currCity] + needTime
                    if round == N - 1:
                        print(-1)
                        return

    for city in range(2, N + 1):
        if dist[city] == 100000001:
            print(-1)
        else:
            print(dist[city])

##########################################################

N, M = map(int, sys.stdin.readline().split())

adjL = [[] for _ in range(N + 1)]
for _ in range(M):
    s, e, t = map(int, sys.stdin.readline().split())
    adjL[s].append((e, t))

bellmanFord(1)
