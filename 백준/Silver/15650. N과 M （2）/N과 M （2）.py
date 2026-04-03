import sys

def comb(n, N, M):
    if n == N:
        if sum(b) == M:
            temp = []
            for j in range(N):
                if b[j]:
                    temp.append(arr[j])
            rst.append(temp)
        return

    b[n] = 0
    comb(n + 1, N, M)
    b[n] = 1
    comb(n + 1, N, M)

###############################################################

N, M = map(int, sys.stdin.readline().split())

arr = list(range(1, N + 1))
b = [0] * (N + 1)
rst = []
comb(0, N, M)

rst.sort()

for r in rst:
    print(*r)