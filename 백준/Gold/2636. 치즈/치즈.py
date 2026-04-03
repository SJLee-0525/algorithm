from collections import deque
import sys

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def clearOuterAir():
    '''OuterAir 배열 초기화'''
    for i in range(N):
        for j in range(M):
            outerAir[i][j] = 0

def checkAir():
    '''바깥에 위치한 공기 찾기'''
    queue = deque([(0, 0)]) # 가장자리는 항상 공기니까 큐에 넣고 시작
    outerAir[0][0] = 1      # 바깥 공기는 1로 표시
    airCnt = 1              # 다 녹았는지 확인할 변수

    # BFS: 바깥 공기들만 탐색
    while queue:
        i, j = queue.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and not table[mi][mj] and not outerAir[mi][mj]:
                outerAir[mi][mj] = 1
                queue.append((mi, mj))
                airCnt += 1

    # 바깥 공기 수 반환
    return airCnt

def melting(si, sj):
    '''녹일 치즈 찾아서 좌표 값 리스트에 담는 함수'''
    queue = deque([(si, sj)])   # 시작 좌표 큐에 담고 시작
    outerAir[si][sj] = -1       # 구분하기 위해서 outerAir 방문표시는 -1 (1은 바깥 공기, 0은 미탐색)
    cheeseCnt = 1               # 치즈의 개수 셀 변수

    # BFS: 치즈들을 탐색하며 치즈 카운트와 동시에 바깥에 위치한 치즈는 리스트에 삽입
    while queue:
        check = False           # 바깥 치즈인지 판별할 boolean 변수
        i, j = queue.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M:
                # 만약 인접한 곳이 이전에 체크된 적이 없고, 치즈라면
                if outerAir[mi][mj] == 0 and table[mi][mj] == 1:
                    outerAir[mi][mj] = -1   # 방문 표시
                    queue.append((mi, mj))  # 큐 삽입
                    cheeseCnt += 1          # 치즈 카운트
                # 만약 인접한 곳이 이전에 바깥 공기로 체크된 적 있고 공기라면
                elif outerAir[mi][mj] == 1 and table[mi][mj] == 0:
                    check = True            # 바깥 치즈라고 표시

        if check:   # 만약 치즈가 바깥 치즈라면 녹일 좌표 리스트에 담아둠
            meltTarget.append((i, j))

    return cheeseCnt

#########################################################################

N, M = map(int, sys.stdin.readline().split())
table = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
outerAir = [[0] * M for _ in range(N)]

time, cnt, prevCnt = 0, 0, 0
meltTarget = []
while 1:
    cnt = checkAir() # 바깥 공기 세고
    if cnt == N * M: # 만약 전부 바깥 공기라면 (전부 녹았다면) 중단
        break

    prevCnt = 0     # 이전 치즈 수 초기화
    for i in range(N):
        for j in range(M):
            # 만약 탐색된 적이 없고, 치즈라면 bfs 호출
            if table[i][j] == 1 and outerAir[i][j] == 0:
                prevCnt += melting(i, j) # 치즈 추가

    while meltTarget:   # 좌표가 입력된 데이터를 돌면서 치즈 녹임
        i, j = meltTarget.pop()
        table[i][j] = 0

    time += 1       # 시간 추가
    clearOuterAir() # outerAir 초기화화

print(time)
print(prevCnt)