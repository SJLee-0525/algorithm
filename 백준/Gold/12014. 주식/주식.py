import sys, bisect

T = int(sys.stdin.readline())
for tc in range(T):
    N, K = map(int, sys.stdin.readline().split())
    vals = list(map(int, sys.stdin.readline().split()))

    DP = []
    for i in range(N):
        if not DP:
            DP.append(vals[i])
        if DP[-1] < vals[i]:
            DP.append(vals[i])
        else:
            idx = bisect.bisect_left(DP, vals[i])
            DP[idx] = vals[i]

    print(f'Case #{tc + 1}')
    if len(DP) >= K:
        print(1)
    else:
        print(0)