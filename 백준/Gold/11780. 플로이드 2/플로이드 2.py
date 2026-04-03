import sys, pprint

N = int(sys.stdin.readline()) # 도시 개수
M = int(sys.stdin.readline()) # 버스 개수

table = [[100000001] * (N + 1) for _ in range(N + 1)]
for _ in range(M):
    s, e, c = map(int, sys.stdin.readline().split())
    if table[s][e] > c:
        table[s][e] = c

# pprint.pprint(table)
paths = [[[i] for i in range(N + 1)] for _ in range(N + 1)]

for m in range(1, N + 1):
    for s in range(1, N + 1):
        for e in range(1, N + 1):
            if s == e:
                continue
            if table[s][e] > table[s][m] + table[m][e]:
                table[s][e] = table[s][m] + table[m][e]
                paths[s][e] = paths[s][m] + paths[m][e] # 경로 기록

# pprint.pprint(paths)
# pprint.pprint(table)

result1 = ''
result2 = ''
for i in range(1, N + 1):
    for j in range(1, N + 1):
        if table[i][j] == 100000001:
            result1 += '0 '
            result2 += '0\n'
        else:
            result1 += str(table[i][j]) + ' '
            result2 += str(len(paths[i][j]) + 1) + ' ' + str(i) + ' '
            for r in paths[i][j]:
                result2 += str(r) + ' '
            result2 += '\n'
    result1 += '\n'

print(result1, end='')
print(result2)

