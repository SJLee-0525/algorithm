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

####################################################################

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

parents = list(range(N + 1))
for city_num in range(1, N + 1):
    adj_city_info = list(map(int, sys.stdin.readline().split()))
    for adj_city_num in range(N):
        if adj_city_info[adj_city_num]:
            union(city_num, adj_city_num + 1)

plans = list(map(int, sys.stdin.readline().split()))
root = None
for plan in plans:
    if root is None:
        root = find(parents[plan])
    else:
        if root != find(parents[plan]):
            print('NO')
            break
else:
    print('YES')