import sys

def find(x):
    if parents[x] == x:
        return x
    parents[x] = find(parents[x])
    return parents[x]

def union(x, y):
    root_x = find(x)
    root_y = find(y)
    if root_x == root_y:
        return
    if root_x < root_y:
        parents[root_y] = root_x
    else:
        parents[root_x] = root_y


def dfs(node, parent):
    stack = [(node, parent)]
    visited[node] = 1
    vertexCnt = 0
    edgeCnt = 0

    while stack:
        curr_node, parent = stack.pop()
        vertexCnt += 1
        for adjNode in adjL[curr_node]:
            edgeCnt += 1
            if not visited[adjNode]:
                visited[adjNode] = 1
                stack.append((adjNode, curr_node))
            elif adjNode != parent:  # 다시 방문한 노드가 부모가 아니면 사이클 존재
                return False

    # 트리의 경우, 간선은 (정점 - 1)이어야 함 (양방향 간선이므로 2배 계산)
    if edgeCnt // 2 == vertexCnt - 1:
        return True
    else:
        return False

#########################################################################
case = 0

while 1:
    case += 1

    N, M = map(int, sys.stdin.readline().split()) # 정점 개수, 간선 개수
    if (N, M) == (0, 0):
        break

    parents = list(range(N + 1))
    adjL = [[] for _ in range(N + 1)]
    visited = [0] * (N + 1)

    for _ in range(M):
        x, y = map(int, sys.stdin.readline().split())
        union(x, y)
        adjL[x].append(y)
        adjL[y].append(x)

    used = [0] * (N + 1)
    treeCnt = 0
    for parent in parents[1:]:
        if used[parent]:
            continue
        used[parent] = 1
        if dfs(parent, -1):
            treeCnt += 1

    print(f"Case {case}: ", end='')
    if treeCnt == 0:
        print('No trees.')
    elif treeCnt == 1:
        print('There is one tree.')
    else:
        print(f'A forest of {treeCnt} trees.')