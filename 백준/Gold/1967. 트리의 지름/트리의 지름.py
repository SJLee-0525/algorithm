import sys
sys.setrecursionlimit(10**9)

def dfs(node, weight):
    for adjInfo in adjL[node]:
        adjNode, adjWeight = adjInfo
        if distance[adjNode] == -1:
            distance[adjNode] = weight + adjWeight
            dfs(adjNode, distance[adjNode])

############################################################
# 루트 노드에서 가장 멀리 떨어진 노드를 기준으로 가장 먼 노드가 트리의 지름임

N = int(sys.stdin.readline())
adjL = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    par, chd, wgt = map(int, sys.stdin.readline().split())
    adjL[par].append((chd, wgt))
    adjL[chd].append((par, wgt))

distance = [-1] * (N + 1) # 방문 표시와 더불어 길이까지 기록할 리스트
distance[1] = 0
dfs(1, 0)   # dfs 탐색을 통해 1번 (루트) 노드에서부터 가장 멀리 떨어진 노드 탐색

longest_distance = max(distance) # 탐색 후 가장 멀리 떨어진 노드의 거리를 측정
start_node = distance.index(longest_distance) # 가장 멀리 떨어진 노드 구하고
distance = [-1] * (N + 1)    # 다시 탐색해야하므로 초기화
distance[start_node] = 0
dfs(start_node, 0) # root에서 가장 멀리 떨어진 노드를 기준으로 가장 멀리 떨어진 노드 구함

print(max(distance))
