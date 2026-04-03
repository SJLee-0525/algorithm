import sys
sys.setrecursionlimit(10000001)

def dfs(node, dist):
    global max_dist, max_dist_node

    visited[node] = True
    if max_dist < dist:
        max_dist, max_dist_node = dist, node

    for adjInfo in adjL[node]:
        adjNode, adjDist = adjInfo
        if not visited[adjNode]:
            dfs(adjNode, dist + adjDist)

###########################################################

V = int(sys.stdin.readline())
adjL = [[] for _ in range(V + 1)]

for _ in range(V):
    node, *adjInfo = map(int, sys.stdin.readline().split())
    for i in range(0, len(adjInfo), 2):
        if adjInfo[i] == -1:
            break
        adjL[node].append((adjInfo[i], adjInfo[i + 1]))

visited = [False] * (V + 1)
max_dist = 0
max_dist_node = None
dfs(1, 0)

visited = [False] * (V + 1)
max_dist = 0
dfs(max_dist_node, 0)

print(max_dist)
