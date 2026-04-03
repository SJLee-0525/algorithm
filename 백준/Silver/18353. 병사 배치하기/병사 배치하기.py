import sys, bisect

def cal():
    DP = [info[N - 1]]

    for i in range(N - 2, -1, -1):
        if DP[-1] < info[i]:
            DP.append(info[i])
        else:
            idx = bisect.bisect_left(DP, info[i])
            DP[idx] = info[i]

    print(N - len(DP))
    return

##########################################################

N = int(sys.stdin.readline())
info = list(map(int, sys.stdin.readline().split()))

cal()