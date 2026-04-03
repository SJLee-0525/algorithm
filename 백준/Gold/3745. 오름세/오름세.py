import sys, bisect

while True:
    try:
        N = int(sys.stdin.readline())
        arr = list(map(int, sys.stdin.readline().split()))

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

    except:
        exit()