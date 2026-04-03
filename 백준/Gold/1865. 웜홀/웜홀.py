import sys

def bellman_ford(start):
    dist = [100000001] * (N + 1)
    dist[start] = 0

    for round in range(N):
        for currNode in range(1, N + 1):
            for nextNode, needTime in adjL[currNode]:
                if dist[nextNode] > dist[currNode] + needTime:
                    dist[nextNode] = dist[currNode] + needTime
                    if round == N - 1:
                        return 'YES'

    return 'NO'

################################################################

T = int(sys.stdin.readline())
for tc in range(T):
    N, M, W = map(int, sys.stdin.readline().split())

    adjL = [[] for _ in range(N + 1)]
    for _ in range(M):
        s, e, t = map(int, sys.stdin.readline().split())
        adjL[s].append((e, t))
        adjL[e].append((s, t))

    for _ in range(W):
        s, e, t = map(int, sys.stdin.readline().split())
        adjL[s].append((e, -t))

    print(bellman_ford(1))