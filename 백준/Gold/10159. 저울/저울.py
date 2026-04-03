import sys

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

table = [[0] * (N + 1) for _ in range(N + 1)]
for _ in range(M):
    t1, t2 = map(int, sys.stdin.readline().split())
    table[t1][t2] = 1

for m in range(1, N + 1):
    for s in range(1, N + 1):
        for e in range(1, N + 1):
            if table[s][m] and table[m][e]:
                table[s][e] = 1

for s in range(1, N + 1):
    cnt = 0
    for e in range(1, N + 1):
        # 만약 s에서 e로 갈 수 없고, e에서 s로 갈 수 없다면 : 비교 불가
        if not table[s][e] and not table[e][s]: 
            cnt += 1
    print(cnt - 1)