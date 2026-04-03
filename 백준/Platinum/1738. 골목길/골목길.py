import sys

def bellmanFord(start):
    global isCycle

    getMoney[start] = 0

    for round in range(N):
        for currNode in range(1, N + 1):
            for nextNode, money in adjL[currNode]:
                if getMoney[currNode] != -100000001 and getMoney[nextNode] < getMoney[currNode] + money:
                    getMoney[nextNode] = getMoney[currNode] + money
                    path[nextNode] = currNode
                    if round == N - 1:
                        getMoney[nextNode] = 100000001 # 음의 사이클이라면 INF로 갱신

    # print(getMoney)
    # print(path)

############################################################

N, M = map(int, sys.stdin.readline().split())

getMoney = [-100000001] * (N + 1)
adjL = [[] for _ in range(N + 1)]
path = [-1] * (N + 1)
isCycle = False
for _ in range(M):
    s, e, w = map(int, sys.stdin.readline().split())
    adjL[s].append((e, w))

bellmanFord(1)

if getMoney[N] == 100000001:
    print(-1)
else:
    now, result = N, []
    while now != -1:
        result.append(str(now))
        now = path[now]
    print(' '.join(reversed(result)))