import sys, pprint

N, K = map(int, sys.stdin.readline().split()) # 사건 개수, 사건 전후 관계 개수

table = [[0] * (N + 1) for _ in range(N + 1)]
for _ in range(K):
    s, e = map(int, sys.stdin.readline().split())
    table[s][e] = 1
    table[e][s] = -1

for m in range(N + 1):
    for s in range(N + 1):
        for e in range(N + 1):
            if table[s][m] == table[m][e] == 1:
                table[s][e] = 1
            elif table[s][m] == table[m][e] == -1:
                table[s][e] = -1

# pprint.pprint(table)
S = int(sys.stdin.readline())
for _ in range(S):
    i, j = map(int, sys.stdin.readline().split())
    print(-table[i][j])