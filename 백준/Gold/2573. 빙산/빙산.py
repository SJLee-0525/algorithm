import sys
from collections import deque

di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

def one_year_later():
    queue = deque()             # 변동이 있는 빙하 좌표와 낮아질 높이를 기록할 queue
    for i in range(N):
        for j in range(M):
            if iceberg[i][j]:   # 빙하가 있으면
                cnt = 0         # 인접한 면의 바다 개수 카운트
                for k in range(4):
                    mi, mj = i + di[k], j + dj[k]
                    if iceberg[mi][mj] == 0 <= mi < N and 0 <= mj < M: # 인덱스 벗어나지 않고, 바다라면 (0) 카운트
                        cnt += 1
                queue.append((i, j, cnt))   # queue에 해당 좌표와 카운트 기록

    while queue: # 다 순회하면 큐 순회
        i, j, cnt = queue.popleft()         # 큐에서 하나씩 뽑아서
        iceberg[i][j] = iceberg[i][j] - cnt # 해당 좌표 변동 기록
        if iceberg[i][j] <= 0:  # 만약 음수가 나온다면 0으로 정정
            iceberg[i][j] = 0
        else:                   # 음수가 아니라면 이후에 bfs 순회할 때 순회를 줄이기 위해 빙하 좌표 기록
            berg.append((i, j))

def bfs(si, sj):
    queue = deque([(si, sj)])   # 시작 좌표 queue에 담고 시작
    visited[si][sj] = 1         # 방문 표시

    while queue:
        i, j = queue.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if visited[mi][mj] == 0 <= mi < N and 0 <= mj < M and iceberg[mi][mj]:
                queue.append((mi, mj))
                visited[mi][mj] = 1

#########################################################################

N, M = map(int, sys.stdin.readline().split())
iceberg = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

year = 0 # 경과한 시간 기록

while 1:
    berg = []           # 빙하 좌표를 담을 리스트
    one_year_later()
    year += 1

    visited = [[0] * M for _ in range(N)]
    piece = 0
    for i, j in berg:   # 빙하 좌표 순회
        if not visited[i][j]: # 방문한 적이 없는 빙하라면 bfs 탐색
            bfs(i, j)
            piece += 1        # 빙하 조각 카운트

    if piece >= 2:      # 빙하 개수가 2개 이상이라면 종료
        break
    elif piece == 0:    # 만약 조각이 하나도 없다면 (다 녹았다면) 
        year = 0        # 0 출력
        break

print(year)


