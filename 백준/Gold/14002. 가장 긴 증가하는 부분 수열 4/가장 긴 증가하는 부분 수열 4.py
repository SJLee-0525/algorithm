import sys, bisect

N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

DP = []
store = []
for i in range(N):
    if not DP:
        DP.append(arr[i])
        store.append((len(DP) - 1, arr[i]))
    if DP[-1] < arr[i]:
        DP.append(arr[i])
        store.append((len(DP) - 1, arr[i]))
    else:
        idx = bisect.bisect_left(DP, arr[i])
        DP[idx] = arr[i]
        store.append((idx, arr[i]))


tarIdx = len(DP) - 1
result = []
for i in range(len(store) - 1, -1, -1):
    if tarIdx == store[i][0]:
        result.append(store[i][1])
        tarIdx -= 1

print(len(DP))
print(*result[::-1])