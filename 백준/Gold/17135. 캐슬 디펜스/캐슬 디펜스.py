import sys
from collections import deque

def perm(lv, num):
    if lv == 3:
        # print('####', path)
        game()
        return

    for n in range(num, M):
        if used[n]:
            continue
        path.append(n)
        used[n] = True
        perm(lv + 1, n + 1)
        path.pop()
        used[n] = False

def game():
    global result, board

    board = [b[:] for b in initBoard]
    killEnemy = 0
    isEnd = False

    while not isEnd:
        targets = set()
        for archer in path:
            target = findTarget(archer)
            if target:
                targets.add(target)

        if targets:
            for ti, tj in targets:
                board[ti][tj] = 0
                killEnemy += 1

        isEnd = moveEnemy()

    result = max(result, killEnemy)


def findTarget(archer):
    checked = [[0] * M for _ in range(N + 1)]
    checked[N][archer] = 1

    queue = deque([(N, archer)])
    target = []
    while queue:
        i, j = queue.popleft()
        if checked[i][j] > D:
            continue

        for k in range(3):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi and 0 <= mj < M and not checked[mi][mj]:
                checked[mi][mj] = checked[i][j] + 1
                if board[mi][mj]:
                    target.append((checked[mi][mj], mj, mi))
                queue.append((mi, mj))

    if target:
        target.sort()
        # print(target)
        return (target[0][2], target[0][1])
    else:
        return False

def moveEnemy():
    enemies = []
    for i in range(N):
        for j in range(M):
            if board[i][j]:
                enemies.append((i, j))
                board[i][j] = 0

    if not enemies:
        return True

    for ei, ej in enemies:
        if ei + 1 == N:
            continue
        else:
            board[ei + 1][ej] = 1

    return False



###########################################################################

N, M, D = map(int, sys.stdin.readline().split())

initBoard = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
initBoard.append([0] * M)

board = [b[:] for b in initBoard]

di = [0, -1, 0]
dj = [-1, 0, 1]

used = [False] * M
path = []
result = -1

perm(0, 0)

print(result)