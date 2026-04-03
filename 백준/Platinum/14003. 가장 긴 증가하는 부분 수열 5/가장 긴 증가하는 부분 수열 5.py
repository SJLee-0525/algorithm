import sys, bisect

N = int(sys.stdin.readline())
arr = tuple(map(int, sys.stdin.readline().split()))

DP = [-1000000001]
store = [] # 저장할 때마다 저장하는 위치 값과 해당 값을 저장

for i in range(N):
    if DP[-1] < arr[i]:
        DP.append(arr[i])
        store.append((len(DP) - 1, arr[i]))
    else:
        idx = bisect.bisect_left(DP, arr[i])
        DP[idx] = arr[i]
        store.append((idx, arr[i]))

# print(len(DP))
# print(store)

idx = len(DP) - 1
print(idx)

result = []
for i in range(len(store) - 1, -1, -1):
    if store[i][0] == idx:
        result.append(store[i][1])
        idx -= 1

print(*result[::-1])