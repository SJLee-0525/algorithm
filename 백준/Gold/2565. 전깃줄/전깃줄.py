import sys, bisect

N = int(sys.stdin.readline())
arr = [-100000001] * (501)

for _ in range(N):
    l1, l2 = map(int, sys.stdin.readline().split())
    arr[l1] = l2

DP = [-100000001]

for i in range(501):
    if arr[i] == -100000001:
        continue

    if DP[-1] < arr[i]:
        DP.append(arr[i])
    else:
        idx = bisect.bisect_left(DP, arr[i])
        DP[idx] = arr[i]

print(N - len(DP) + 1)
