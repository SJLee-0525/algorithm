import sys

def find_r(i, j, N, type):
    global cnt
    if (i, j) == (N - 1, N- 1):
        cnt += 1
    else:
        if type != 2 and 0 <= j + dj[0] < N and room[i][j + dj[0]] == 0:
            mj = j + dj[0]
            find_r(i, mj, N, 0)
        if 0 <= i + di[1] < N and 0 <= j + dj[1] < N and room[i + di[1]][j] == room[i][j + dj[1]] == room[i + di[1]][j + dj[1]] == 0:
            mi, mj = i + di[1], j + dj[1]
            find_r(mi, mj, N, 1)
        if type != 0 and 0 <= i + di[2] < N and room[i + di[2]][j] == 0:
            mi = i + di[2]
            find_r(mi, j, N, 2)
        return

N = int(sys.stdin.readline())
room = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# 타입 0: 가로, 1: 대각선, 2: 세로
cnt = 0

di = [0, 1, 1]
dj = [1, 1, 0]

find_r(0, 1, N, 0)

print(cnt)
