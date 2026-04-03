import sys
sys.setrecursionlimit(1000000)
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

################################################################

N, M = map(int, sys.stdin.readline().split())
parents = list(range(N + 1))

for _ in range(M):
    prompt, x, y = map(int, sys.stdin.readline().split())
    if prompt == 0:
        union(x, y)
    else:
        if find(parents[x]) == find(parents[y]):
            print('YES')
        else:
            print('NO')