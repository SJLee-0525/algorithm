import sys
sys.setrecursionlimit(10**6)

def find(x):
    if arr[x] == x:
        return x

    arr[x] = find(arr[x])
    return arr[x]

def union(x, y):
    root_x = find(x)
    root_y = find(y)

    if root_x == root_y:
        return True
    elif root_x < root_y:
        arr[root_x] = arr[root_y]
    else:
        arr[root_y] = arr[root_x]
    return False

###################################################################

N, M = map(int, sys.stdin.readline().split()) # 점의 개수 N, 진행 횟수 M

arr = list(range(N + 1))

for seq in range(1, M + 1):
    x, y = map(int, sys.stdin.readline().split())
    if union(x, y):
        print(seq)
        break
else:
    print(0)
