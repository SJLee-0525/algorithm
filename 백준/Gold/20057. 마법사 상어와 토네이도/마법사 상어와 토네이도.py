import sys, math

def scatterSand(i:int, j:int):
    global totalOutSand

    remainSand = board[i][j]
    outSand = 0

    i5, j5 = i + (di[k] * 2), j + (dj[k] * 2)
    if 0 <= i5 < N and 0 <= j5 < N:
        board[i5][j5] += math.floor(board[i][j] * 0.05)
    else:
        outSand += math.floor(board[i][j] * 0.05)
    remainSand -= math.floor(board[i][j] * 0.05)

    i7l, j7l = i + di[(k + 1) % 4], j + dj[(k + 1) % 4]
    if 0 <= i7l < N and 0 <= j7l < N:
        board[i7l][j7l] += math.floor(board[i][j] * 0.07)
    else:
        outSand += math.floor(board[i][j] * 0.07)
    remainSand -= math.floor(board[i][j] * 0.07)

    i7r, j7r = i + di[(k + 3) % 4], j + dj[(k + 3) % 4]
    if 0 <= i7r < N and 0 <= j7r < N:
        board[i7r][j7r] += math.floor(board[i][j] * 0.07)
    else:
        outSand += math.floor(board[i][j] * 0.07)
    remainSand -= math.floor(board[i][j] * 0.07)

    i2l, j2l = i + (di[(k + 1) % 4] * 2), j + (dj[(k + 1) % 4] * 2)
    if 0 <= i2l < N and 0 <= j2l < N:
        board[i2l][j2l] += math.floor(board[i][j] * 0.02)
    else:
        outSand += math.floor(board[i][j] * 0.02)
    remainSand -= math.floor(board[i][j] * 0.02)

    i2r, j2r = i + (di[(k + 3) % 4] * 2), j + (dj[(k + 3) % 4] * 2)
    if 0 <= i2r < N and 0 <= j2r < N:
        board[i2r][j2r] += math.floor(board[i][j] * 0.02)
    else:
        outSand += math.floor(board[i][j] * 0.02)
    remainSand -= math.floor(board[i][j] * 0.02)

    i10, j10 = i + di[k], j + dj[k]
    if di[k] == 0:
        i10l, j10l = i10 - 1, j10
        if 0 <= i10l < N and 0 <= j10l < N:
            board[i10l][j10l] += math.floor(board[i][j] * 0.1)
        else:
            outSand += math.floor(board[i][j] * 0.1)
        remainSand -= math.floor(board[i][j] * 0.1)

        i10r, j10r = i10 + 1, j10
        if 0 <= i10r < N and 0 <= j10r < N:
            board[i10r][j10r] += math.floor(board[i][j] * 0.1)
        else:
            outSand += math.floor(board[i][j] * 0.1)
        remainSand -= math.floor(board[i][j] * 0.1)

    else:
        i10l, j10l = i10, j10 - 1
        if 0 <= i10l < N and 0 <= j10l < N:
            board[i10l][j10l] += math.floor(board[i][j] * 0.1)
        else:
            outSand += math.floor(board[i][j] * 0.1)
        remainSand -= math.floor(board[i][j] * 0.1)

        i10r, j10r = i10, j10 + 1
        if 0 <= i10r < N and 0 <= j10r < N:
            board[i10r][j10r] += math.floor(board[i][j] * 0.1)
        else:
            outSand += math.floor(board[i][j] * 0.1)
        remainSand -= math.floor(board[i][j] * 0.1)

    i1, j1 = i - di[k], j - dj[k]
    if di[k] == 0:
        i1l, j1l = i1 - 1, j1
        if 0 <= i1l < N and 0 <= j1l < N:
            board[i1l][j1l] += math.floor(board[i][j] * 0.01)
        else:
            outSand += math.floor(board[i][j] * 0.01)
        remainSand -= math.floor(board[i][j] * 0.01)

        i1r, j1r = i1 + 1, j1
        if 0 <= i1r < N and 0 <= j1r < N:
            board[i1r][j1r] += math.floor(board[i][j] * 0.01)
        else:
            outSand += math.floor(board[i][j] * 0.01)
        remainSand -= math.floor(board[i][j] * 0.01)

    else:
        i1l, j1l = i1, j1 - 1
        if 0 <= i1l < N and 0 <= j1l < N:
            board[i1l][j1l] += math.floor(board[i][j] * 0.01)
        else:
            outSand += math.floor(board[i][j] * 0.01)
        remainSand -= math.floor(board[i][j] * 0.01)

        i1r, j1r = i1, j1 + 1
        if 0 <= i1r < N and 0 <= j1r < N:
            board[i1r][j1r] += math.floor(board[i][j] * 0.01)
        else:
            outSand += math.floor(board[i][j] * 0.01)
        remainSand -= math.floor(board[i][j] * 0.01)

    ri, rj = i + di[k], j + dj[k]
    if 0 <= ri < N and 0 <= rj < N:
        board[ri][rj] += remainSand
    else:
        outSand += remainSand

    board[i][j] = 0
    totalOutSand += outSand

#########################################################################

N = int(sys.stdin.readline())
board = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

di = [-1, 0, 1, 0]
dj = [0, -1, 0, 1]
k = 0

tornado = [[0] * N for _ in range(N)]
ti = tj = N // 2

totalOutSand = 0

while (ti, tj) != (0, 0):
    tornado[ti][tj] = 1

    # 토네이도 방향 전환
    tmi, tmj = ti + di[(k + 1) % 4], tj + dj[(k + 1) % 4]
    if not tornado[tmi][tmj]:
        k = (k + 1) % 4

    # 토네이도 이동
    ti += di[k]
    tj += dj[k]

    # 모래 퍼뜨리기
    scatterSand(ti, tj)

print(totalOutSand)