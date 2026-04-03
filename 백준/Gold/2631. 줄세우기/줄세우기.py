import sys, bisect

N = int(sys.stdin.readline())

arr = [0] * N
for i in range(N):
    arr[i] = int(sys.stdin.readline())

DP = []
for i in range(N):
    if not DP:
        DP.append(arr[i])
    elif DP[-1] < arr[i]:
        DP.append(arr[i])
    else:
        idx = bisect.bisect_left(DP, arr[i])
        DP[idx] = arr[i]

print(N - len(DP))