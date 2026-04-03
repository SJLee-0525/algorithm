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

###################################################################

N = int(sys.stdin.readline())
parents = list(range(N + 1))

for _ in range(N - 2):
    a, b = map(int, sys.stdin.readline().split())
    union(a, b)

roots = []
for i in range(1, N + 1):
    root = find(i)
    if root not in roots:
        roots.append(root)
        if len(roots) >= 2:
            break

print(*roots)
