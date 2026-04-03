import sys

def perm(lev, M):
    if lev == M:
        print(*res)
        return

    temp_used = []
    for i in range(N):
        if arr[i] in temp_used:
            continue
        temp_used.append(arr[i])
        res.append(arr[i])
        perm(lev + 1, M)
        res.pop()

###########################################################

N, M = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()

res = []
perm(0, M)

