import sys
from collections import deque

di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

def bfs(si, sj):
    queue = deque([(si, sj, 0, 1)]) # 큐에 (좌표, 벽 부숨 여부, 이동 거리) 담음
    visited[si][sj][0] = 1          # 방문 표시 (0: 안 부숨, 1: 부숨)

    while queue: # bfs 탐색
        i, j, is_destroyed, move = queue.popleft()
        if (i, j) == (ti, tj): # 도착지면 return
            return

        for k in range(4): # 델타 탐색
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M: # 범위를 벗어나지 않고
                if (arr[mi][mj] == 0 and
                        (visited[mi][mj][is_destroyed] == 0 or visited[mi][mj][is_destroyed] > move + 1)):
                    # 가려는 곳이 벽이 아니고, 파괴 여부에 따른 visited에 방문 표시된 적이 없거나, 더 짧은 거리라면
                    visited[mi][mj][is_destroyed] = move + 1        # visited 갱신
                    queue.append((mi, mj, is_destroyed, move + 1))  # queue에 담음
                elif (arr[mi][mj] == 1 and is_destroyed == 0 and
                      (visited[mi][mj][1] == 0 or visited[mi][mj][1] > move + 1)):
                    # 만약 가려는 곳잉 벽인데, 벽을 부순 적이 없고, 파괴가 반영된 visited에 방문 표시된 적 없거나, 더 짧은 거리라면
                    visited[mi][mj][1] = move + 1       # visited 갱신
                    queue.append((mi, mj, 1, move + 1)) # queue에 담음

#############################################################################

N, M = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

ti, tj = N - 1, M - 1 # 도착지 (입력 값은 인덱스 반영해서 주지 않음)
visited = [[[0] * 2 for _ in range(M)] for __ in range(N)] # 3차원 방문 배열 생성 visited[r][c][부숨 여부]
result = 10000001

bfs(0, 0)

result = -1
for temp in visited[ti][tj]: # 도착지의 값을 순회
    if result == -1:         # result가 -1인 상황에서
        if temp > 0:         # 양수가 나오면
            result = temp    # 일단 갱신
    else:                    # result가 갱신된 적 있다면
        if temp != 0 and result > temp: # + temp가 0이 아니면서 현재의 result 값보다 더 작다면
            result = temp   # 갱신

print(result)


