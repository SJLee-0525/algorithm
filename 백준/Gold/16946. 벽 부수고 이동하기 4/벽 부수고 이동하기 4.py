import sys
from collections import deque

di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

def bfs(si, sj, id):
    '''
    0으로 연결된 영역 탐색 및 크기 계산
    '''
    queue = deque([(si, sj)])

    visited[si][sj] = id    # 시작 점을 해당 id로 기록

    cnt = 1
    while queue:
        i, j = queue.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and arr[mi][mj] == visited[mi][mj] == 0:
                visited[mi][mj] = id # 시작 점과 같은 영역 id로 표시
                cnt += 1             # 영역 크기 추가
                queue.append((mi, mj))

    return cnt # 영역 크기 반환

#########################################################################

N, M = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

visited = [[0] * M for _ in range(N)] # 방문 여부 및 영역id 저장
areaSizes = {} # { 각 영역 id : 각 영역 크기 }
areaId = 1

# 이동할 수 있는 공간 (0)에 대해서 bfs 수행
for i in range(N):
    for j in range(M):
        if arr[i][j] == 0 and visited[i][j] == 0: # 아직 방문하지 않은 0에 대해서만
            areaSizes[areaId] = bfs(i, j, areaId)
            areaId += 1

# print(visited)
# print(areaSizes)

result = [[0] * M for _ in range(N)]

# 벽(1) 기준으로 결과 탐색
for i in range(N):
    for j in range(M):
        if arr[i][j]: # 벽이면
            uniqueAreas = set() # 인접한 영역 id를 기록 (중복 방지)
            for k in range(4):
                mi, mj = i + di[k], j + dj[k]
                if 0 <= mi < N and 0 <= mj < M and visited[mi][mj]:
                    uniqueAreas.add(visited[mi][mj])

            # 인접한 지역의 id를 키로 해당 영역의 크기를 가져오고 합산 (자기 자신도 포함)
            result[i][j] = (1 + sum(areaSizes[a] for a in uniqueAreas)) % 10

for r in result:
    print(''.join(map(str, r)))