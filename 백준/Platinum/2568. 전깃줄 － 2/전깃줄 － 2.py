import sys, bisect

N = int(sys.stdin.readline())

lines = []
for _ in range(N):
    l1, l2 = map(int, sys.stdin.readline().split())
    lines.append((l1, l2))

lines.sort()
# print(lines)

DP = []
store = []
for i in range(N):
    if not DP:
        DP.append(lines[i][1])
    if DP[-1] < lines[i][1]:
        DP.append(lines[i][1])
        store.append((len(DP) - 1, lines[i][1]))
    else:
        idx = bisect.bisect_left(DP, lines[i][1])
        DP[idx] = lines[i][1]
        store.append((idx, lines[i][1]))

print(N - len(DP))

result = []
max_i = len(DP) - 1

for i in range(len(store) - 1, -1, -1):
    if store[i][0] == max_i:
        result.append(store[i][1])
        max_i -= 1

# print(result)

needLines = []
for i in range(N - 1, -1, -1):
    for j in range(len(result)):
        if lines[i][1] == result[j]:
            needLines.append(lines[i][0])

needLines.sort()
for i in range(N):
    b = False
    for j in range(len(needLines)):
        if lines[i][0] == needLines[j]:
            b = True
    if not b:
        print(lines[i][0])