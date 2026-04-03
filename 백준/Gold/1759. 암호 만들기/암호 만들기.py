import sys

def perm(lev, start, L):
    if lev == L:
        mcnt = 0;
        jcnt = 0;
        for p in path:
            if p in moem:
                mcnt += 1
            else:
                jcnt += 1
            if mcnt >= 1 and jcnt >= 2:
                print(''.join(path))
                break
        return
    for i in range(start + 1, C):
        if used[i]:
            continue
        path.append(arr[i])
        used[i] = 1
        perm(lev + 1, i, L)
        path.pop()
        used[i] = 0

#########################################################

L, C = map(int, sys.stdin.readline().split())
arr = list(input().split())
arr.sort()

moem = []
for a in arr:
    if a in ['a', 'e', 'i', 'o', 'u']:
        moem.append(a)

used = [0] * C
path = []
perm(0, -1, L)