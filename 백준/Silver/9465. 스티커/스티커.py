import sys

def DP(N):
    DP_arr = [[0] * N for _ in range(2)]
    DP_arr[0][0], DP_arr[1][0] = stickers[0][0], stickers[1][0]

    if N >= 2:
        DP_arr[0][1], DP_arr[1][1] = DP_arr[1][0] + stickers[0][1], DP_arr[0][0] + stickers[1][1]

    if N >= 3:
        for j in range(2, N):
            for i in range(2):
                DP_arr[i][j] = max(DP_arr[0][j - 2], DP_arr[1][j - 2], DP_arr[abs(1 - i)][j - 1]) + stickers[i][j]

    return max(DP_arr[0][N - 1], DP_arr[1][N - 1])

#########################################################################################

T = int(sys.stdin.readline())
for _ in range(T):
    N = int(sys.stdin.readline())
    stickers = [list(map(int, sys.stdin.readline().split())) for _ in range(2)]
    print(DP(N))