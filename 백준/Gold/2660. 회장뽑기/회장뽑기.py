import sys
from collections import deque

def bfs(person):
    queue = deque([person])

    visited = [0] * (N + 1)
    visited[person] = 1

    while queue:
        now = queue.popleft()

        for next in adjP[now]:
            if not visited[next]:
                visited[next] = visited[now] + 1
                queue.append(next)

    return max(visited)

##########################################################

N = int(sys.stdin.readline())
adjP = [[] for _ in range(N + 1)]

while 1:
    p1, p2 = map(int, sys.stdin.readline().split())
    if p1 == p2 == -1:
        break
    adjP[p1].append(p2)
    adjP[p2].append(p1)

relations = [100000001] + [0] * N
for person in range(1, N + 1):
    relations[person] = bfs(person)

minRelation = min(relations)
candidates = []
for i in range(1, N + 1):
    if relations[i] == minRelation:
        candidates.append(i)

candidates.sort()

print(minRelation - 1, len(candidates))
print(*candidates)