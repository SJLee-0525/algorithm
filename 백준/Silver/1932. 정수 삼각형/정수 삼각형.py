import sys

def cal():
    DP = [[0] * i for i in range(1, N + 1)]
    DP[0] = arr[0]

    for i in range(1, N):
        for j in range(i + 1):
            left = right = 0
            if j - 1 >= 0:
                left = DP[i - 1][j - 1]
            if j < i:
                right = DP[i - 1][j]
            DP[i][j] = max(left, right) + arr[i][j]

    return max(DP[N - 1])

#######################################################################

N = int(sys.stdin.readline())
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

print(cal())