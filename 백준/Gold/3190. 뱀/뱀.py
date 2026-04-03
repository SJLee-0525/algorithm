import sys
from collections import deque

di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

N = int(sys.stdin.readline())
K = int(sys.stdin.readline())

appleInfo = [[0] * (N + 1) for _ in range(N + 1)]
for _ in range(K):
    x, y = map(int, sys.stdin.readline().split())
    appleInfo[x][y] = 1

dirInfo = deque([])
L = int(sys.stdin.readline())
for _ in range(L):
    sec, dir = sys.stdin.readline().rstrip().split()
    sec = int(sec)
    dirInfo.append((sec, dir))

scd, dir = 0, 0
snake = deque([(1, 1)])
promptInfo = dirInfo.popleft()

while 1:
    # print(snake)
    scd += 1 # 시간 추가

    ni, nj = snake[0][0] + di[dir], snake[0][1] + dj[dir]
    if (not 0 < ni <= N) or (not 0 < nj <= N) or ((ni, nj) in snake): # 벽에 부딪히거나 자기 몸에 닿으면 종료
        break

    snake.appendleft((ni, nj))
    if not appleInfo[ni][nj]: # 사과가 없을 때
        snake.pop()
    else: # 사과가 있으면 pop하지 않음 -> 몸 길이 증가 + 사과 비워주기
        appleInfo[ni][nj] = 0

    if scd == promptInfo[0]: # 방향을 바꿀 시간이 되면 방향을 바꿔줌
        if promptInfo[1] == 'D':
            dir = (dir + 1) % 4
        else:
            dir = (dir - 1) % 4

        if dirInfo: # 다음 명령이 있다면, 명령 갱신
            promptInfo = dirInfo.popleft()

print(scd)

