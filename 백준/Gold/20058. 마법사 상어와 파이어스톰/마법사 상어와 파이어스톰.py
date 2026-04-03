import sys
from collections import deque

def fireStorm(L):
    rotating(L)
    melting()

def rotating(L):
    # zip 사용해서 90도 회전하기 ( Python3 : { 메모리: 35084 KB, 시간: 4408 ms } )
    # for si in range(0, 2 ** N, L):
    #     for sj in range(0, 2 ** N, L):
    #         sub_grid = [row[sj:sj + L] for row in board[si:si + L]]
    #
    #         rotated = list(zip(*sub_grid[::-1]))
    #
    #         for i in range(L):
    #             board[si + i][sj:sj + L] = rotated[i]

    # # 막무가내로 90도 회전하기 ( Python3: { 메모리: 35092 KB, 시간: 4384 ms } ) => 별 차이 없는 듯 : zip 쓰자
    store = deque([])

    for si in range(0, 2 ** N, L):
        for sj in range(0, 2 ** N, L):

            for i in range(si, si + L):
                for j in range(sj, sj + L):
                    store.append(board[i][j])

            for j2 in range(sj + L - 1, sj - 1, -1):
                for i2 in range(si, si + L):
                    board[i2][j2] = store.popleft()

def melting():
    store = []

    for i in range(2 ** N):
        for j in range(2 ** N):
            if board[i][j]:
                adjCnt = 0
                for k in range(4):
                    mi, mj = i + di[k], j + dj[k]
                    if 0 <= mi < 2 ** N and 0 <= mj < 2 ** N and board[mi][mj]:
                        adjCnt += 1

                if adjCnt < 3:
                    store.append((i, j))

    for i, j in store:
        board[i][j] -= 1

def check():
    for i in range(2 ** N):
        for j in range(2 ** N):
            if board[i][j] and not checked[i][j]:
                bfs(i, j)

def bfs(si, sj):
    global totalIce, maxIceSize

    queue = deque([(si, sj)])
    checked[si][sj] = True

    iceSize = 1
    while queue:
        i, j = queue.popleft()
        totalIce += board[i][j]

        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < 2 ** N and 0 <= mj < 2 ** N and board[mi][mj] and not checked[mi][mj]:
                queue.append((mi, mj))
                checked[mi][mj] = True
                iceSize += 1

    maxIceSize = max(maxIceSize, iceSize)

################################################################################

N, Q = map(int, sys.stdin.readline().split())

board = [list(map(int, sys.stdin.readline().split())) for _ in range(2 ** N)]
fireStorms = tuple(map(int, sys.stdin.readline().split()))

di, dj = [1, 0, -1, 0], [0, 1, 0, -1]

for level in fireStorms:
    fireStorm(2 ** level)

totalIce = 0
maxIceSize = 0
checked = [[False] * (2 ** N) for _ in range(2 ** N)]

check()

print(totalIce)
print(maxIceSize)