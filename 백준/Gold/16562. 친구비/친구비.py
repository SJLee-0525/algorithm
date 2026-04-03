import sys

def find(x):
    if parents[x] == x:
        return x
    parents[x] = find(parents[x])
    return parents[x]

def union(a, b):
    root_a = find(a)
    root_b = find(b)
    if root_a == root_b:
        return
    if root_a < root_b:
        parents[root_b] = root_a
    else:
        parents[root_a] = root_b

########################################################

# 학생 수, 관게 수, 소지한 돈
N, M, k = map(int, sys.stdin.readline().split())
cost = [0] + list(map(int, sys.stdin.readline().split()))
parents = list(range(N + 1))

for _ in range(M):
    a, b = map(int, sys.stdin.readline().split())
    union(a, b)

for per in range(1, N + 1):
    find(per)

rootDict = {}
for p in range(1, N + 1):
    if parents[p] not in rootDict:
        rootDict[parents[p]] = cost[p]
    else:
        if rootDict[parents[p]] > cost[p]:
            rootDict[parents[p]] = cost[p]

finalCost = sum(rootDict.values())
if finalCost > k:
    finalCost = "Oh no"

print(finalCost)
