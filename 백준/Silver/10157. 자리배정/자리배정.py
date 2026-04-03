import sys

C, R = map(int, sys.stdin.readline().split())
K = int(sys.stdin.readline())

if K > C * R:
    print(0)
else:
    seats = [[0] * C for _ in range(R)]

    di = [1, 0, -1, 0]
    dj = [0, 1, 0, -1]

    i, j, k, seq = -1, 0, 0, 1

    while seq <= K:
        mi, mj = i + di[k], j + dj[k]
        if 0 <= mi < R and 0 <= mj < C and seats[mi][mj] == 0:
            seats[mi][mj] = seq
            i += di[k]
            j += dj[k]
        else:
            k = (k + 1) % 4
            continue
        seq += 1

    print(j + 1, i + 1)