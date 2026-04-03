import sys
from collections import deque

di = [0, -1, 0, 1, 0]
dj = [0, 0, 1, 0, -1]

def find_baby_shark():
    for i in range(N):
        for j in range(N):
            if space[i][j] == 9:
                return i, j

def bfs(i, j):
    queue = deque([(i, j)])

    visited = [[0] * N for _ in range(N)]
    visited[i][j] = 1

    possible = []   # 먹을 수 있는 물고기가 있는 좌표들 담을 리스트
    min_check = 0   # 먹을 수 있는 물고기가 있는 가장 가까운 좌표를 찾았는지 확인 및 비교할 변수
    while queue:
        i, j = queue.popleft()
        if min_check > 0 and visited[i][j] > min_check: # 만약 min_check에 변동이 있었고, 해당 값보다 높다면 (더 멀다면)
            continue                                    # 무시

        for k in range(1, 5):                           # 델타 탐색
            mi, mj = i + di[k], j + dj[k]
            # 해당 좌표가 범위를 벗어나지 않고, 자신보다 더 큰 물고기가 존재하지 않으며, 방문한 적이 없다면
            if 0 <= mi < N and 0 <= mj < N and space[mi][mj] <= baby_shark and visited[mi][mj] == 0:
                if 0 < space[mi][mj] < baby_shark:  # + 해당 좌표에 먹을 수 있는 물고기가 있다면
                    if min_check == 0:              # + 아직 min_check에 최단 거리가 표시되지 않았다면
                        min_check = visited[i][j]   # min check에 최단 거리 저장

                    possible.append((visited[i][j], mi, mj))    # possible에 이동에 필요한 거리 (시간)과 좌표 추가

                visited[mi][mj] = visited[i][j] + 1 # visited 표시
                queue.append((mi, mj))              # queue에 해당 좌표 추가

    return possible


############################################################################

N = int(sys.stdin.readline())
space = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

i, j = find_baby_shark()                # 아기상어 시작점 찾기
baby_shark, eat_cnt, time = 2, 0, 0     # 처음 아기 상어의 크기는 2, 먹은 횟수, 시간
while 1:
    possible = bfs(i, j)                # bfs 탐색을 통해서 갈 수 있는 좌표들 받아 옴
    if not possible:                    # 갈 수 있는 곳이 없으면 중단 (엄마 도움)
        break
    possible.sort()                     # 갈 수 있는 곳이 여러 곳일 경우를 대비해서 정렬
                                        # (여러 개라면 가장 위에 있는 물고기를, 그것 마저 여러개라면 가장 왼쪽에 있는 물고기가 먼저 오도록)
    time += possible[0][0]              # 걸린 시간 만큼 시간 추가

    space[i][j] = 0                     # 현재 있던 위치 지우고, 이동
    i, j = possible[0][1], possible[0][2]
    space[i][j] = 9

    eat_cnt += 1                        # 먹었으니 카운트 추가하고
    if eat_cnt == baby_shark:           # 자신의 크기만큼 먹게 되면
        baby_shark += 1                 # 아기 상어 성장
        eat_cnt = 0                     # 카운트 초기화

print(time)
