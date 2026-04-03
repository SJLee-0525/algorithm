from collections import deque
import sys

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

# 바깥쪽 공기만 찾는 함수
def checkAirBFS():
    queue = deque([(0, 0)]) # 가장자리는 무조건 공기라고 했음
    checkAir[0][0] = -1     # 바깥쪽 공기는 -1로 지정
    airCnt = 1              # 치즈가 다 녹았는지 확인하기 위해서 바깥 공기도 셀 거임

    while queue:
        i, j = queue.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and not table[mi][mj] and checkAir[mi][mj] == 1:
            # 범위를 버어나지 않고, 해당 위치에 치즈가 없으며, 아직 -1로 체크되지 않았다면 방문
                checkAir[mi][mj] = -1   # 공기 체크
                queue.append((mi, mj))  # 큐 삽입
                airCnt += 1             # 공기 카운트

    return airCnt

# 치즈 찾아서 녹이는 함수
def checkCheeseBFS(i, j):
    queue = deque([(i, j)]) # 시작점 큐에 넣고 시작
    checkAir[i][j] = 9      # 치즈는 checkAir에 9로 표시할 거임

    meltLoc = []            # 녹여야 하는 치즈 좌표 담을 리스트
    while queue:
        i, j = queue.popleft()

        exposeCnt = 0       # 해당 치즈가 공기랑 얼마나 노출됐는지 체크할 변수
        for k in range(4):  # 델타 탐색
            mi, mj = i + di[k], j + dj[k]
            if table[mi][mj] and checkAir[mi][mj] == 1:
            # 치즈는 가장자리에는 배치되지 않으니, 인덱스 벗어날 일 없음
            # 만약 해당 테이블에 치즈가 있고, 아직 해당 테이블을 방문하지 않았다면
                checkAir[mi][mj] = 9    # 치즈 방문 표시
                queue.append((mi, mj))  # 큐 삽입

            elif checkAir[mi][mj] == -1: # 만약 해당 위치가 외부 공기라면
                exposeCnt += 1           # 외부 공기 카운트

        if exposeCnt >= 2:          # 2번 이상 외부 공기에 노출됐다면
            meltLoc.append((i, j))  # 녹여야 하는 치즈 좌표에 추가

    while meltLoc:  # bfs 다 돌고나면 녹여야하는 좌표 리스트 가져와서 하나씩 다 녹임
        li, lj = meltLoc.pop()
        table[li][lj] = 0

##########################################################################

N, M = map(int, sys.stdin.readline().split())
table = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

hours = 0
while 1:
    checkAir = [[1] * M for _ in range(N)]
    airCnt = checkAirBFS()  # 외부 공기 갯수 반환함
    if airCnt == N * M:     # 전부 외부 공기라면: 치즈 없음
        break               # 중단

    hours += 1              # 시간 추가
    for i in range(N):
        for j in range(M):
            if checkAir[i][j] == 1 and table[i][j]: # 아직 탐색한 치즈가 아니라면 bfs 돌림
                checkCheeseBFS(i, j)

print(hours)
