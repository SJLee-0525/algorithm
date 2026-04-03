import sys, bisect

T = int(sys.stdin.readline())
for tc in range(T):
    N = int(sys.stdin.readline())
    arr = []
    for _ in range(N):
        arr.append(int(sys.stdin.readline()))

    DP = []
    for i in range(N):
        if not DP:
            DP.append(arr[i])
        if DP[-1] < arr[i]:
            DP.append(arr[i])
        else:
            idx = bisect.bisect_left(DP, arr[i])
            DP[idx] = arr[i]

    print(len(DP))