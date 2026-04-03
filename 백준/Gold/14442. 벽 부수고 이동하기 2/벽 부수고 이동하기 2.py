'''
이전 풀이는 거리를 측정하는 2차원 배열 visited와 벽 부순 횟수를 기록하는 constructed 2차원 배열을 만들어서 관리했는데 잘 안 됨.
결국 3차원 배열로 품. 2차원 배열 2개도 테케와 질문게시판 반례도 다 맞았는데 왜 틀리는지 모르겠음
'''

import sys
from collections import deque

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def bfs():
    queue = deque([(0, 0, 0)])

    # 건설정보와 거리 정보를 한 번에 기록하는 3차원 배열
    visited = [[[100000001] * (K + 1) for _ in range(M)] for _ in range(N)]
    visited[0][0][0] = 0

    while queue:
        i, j, c = queue.popleft()
        if c > K:   # 뽑아온 건설 횟수가 건설 가능 횟수를 초과하면 continue
            continue

        for k in range(4): # 델타 순회
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M:
                # 만약 통로면: 건설 조건 확인하고 최단 거리 여부 확인 후 갱신 및 큐 삽입
                if arr[mi][mj] == 0 and c <= K and visited[mi][mj][c] > visited[i][j][c] + 1:
                    visited[mi][mj][c] = visited[i][j][c] + 1
                    queue.append((mi, mj, c))
                # 만약 벽이면: 건설 조건 확인 (c + 1) 후 최단 거리 여부 확인 후 갱신 및 큐 삽입
                elif arr[mi][mj] == 1 and c + 1 <= K and visited[mi][mj][c + 1] > visited[i][j][c] + 1:
                    visited[mi][mj][c + 1] = visited[i][j][c] + 1
                    queue.append((mi, mj, c + 1))

    temp = min(visited[N - 1][M - 1]) # 마지막 장소의 1차원 배열에서 min 값 할당
    if temp == 100000001:   # 도착한 적 없으면 -1 반환
        return -1
    else:                   # 아니면 + 1 후 반환
        return temp + 1

############################################################################

N, M, K = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

print(bfs())