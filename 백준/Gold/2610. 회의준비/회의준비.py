from collections import deque
import sys

def find(x):
    if parents[x] == x:
        return x
    parents[x] = find(parents[x])
    return parents[x]

def union(a, b):
    rootA = find(a)
    rootB = find(b)
    if rootA == rootB:
        return
    elif rootA < rootB:
        parents[rootB] = rootA
    else:
        parents[rootA] = rootB

def bfs(p):
    visited = [0] * (N + 1)
    visited[p] = 1

    queue = deque([p])

    while queue:
        np = queue.popleft()
        for adjPerson in adjPersons[np]:
            if not visited[adjPerson] and parents[p] == parents[adjPerson]:
                queue.append(adjPerson)
                visited[adjPerson] = visited[np] + 1

    connect_len = max(visited)
    if parents[p] not in D:
        D[parents[p]] = (connect_len, p)
    else:
        if connect_len < D[parents[p]][0]:
            D[parents[p]] = (connect_len, p)

    # print(p, visited)

####################################################

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

adjPersons = [[] for _ in range(N + 1)]
parents = list(range(N + 1))

for _ in range(M):
    p1, p2 = map(int, sys.stdin.readline().split())
    adjPersons[p1].append(p2)
    adjPersons[p2].append(p1)
    union(p1, p2)

for p in range(1, N + 1):
    find(p)
# print(parents)

D = {}
for p in range(1, N + 1):
    bfs(p)

results = []
for value in D.values():
    results.append(value[1])

print(len(results))
results.sort()
for result in results:
    print(result)
