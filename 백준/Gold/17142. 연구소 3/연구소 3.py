from collections import deque
import sys


def combi(lv, active, V, N, M):
    '''조합 생성'''
    if lv == V:                                             # 바이러스 전부 다 탐색하면
        activeVirus = [virus[i] for i in range(V) if B[i]]  # 활성화 된 애들 담고
        virusBfs(activeVirus, N)                            # BFS 호출
        return

    # 활성화 된 요소가 M개 미만일 경우에만 활성화
    if active < M:
        B[lv] = 1
        combi(lv + 1, active + 1, V, N, M)

    B[lv] = 0
    combi(lv + 1, active, V, N, M)
    return

def virusBfs(activeVirus, N):
    visited = makeVisited(activeVirus, N)   # visited 받아오고
    queue = deque(activeVirus)              # 활성화 된 애들 queue에 담고

    # BFS 시작
    while queue:
        i, j = queue.popleft()

        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            # 방문 않고, 벽이 아니면
            if 0 <= mi < N and 0 <= mj < N and lab[mi][mj] != 1 and visited[mi][mj] <= 1:
                visited[mi][mj] = visited[i][j] + 1
                queue.append((mi, mj))

    checkPossible(visited, N)   # 결과 해석
    return

def makeVisited(activeVirus, N):
    '''visited 생성 후 반환'''
    newVisited = [[0] * N for _ in range(N)]

    # 벽 표시
    for wi, wj in wall:
        newVisited[wi][wj] = -1

    # 바이러스 표시
    for vi, vj in virus:
        newVisited[vi][vj] = 1

    return newVisited

def checkPossible(finVisited, N):
    global result

    # 바이러스 있던 자리는 처리
    for vi, vj in virus:
        finVisited[vi][vj] = 1

    temp = -1
    for fi in range(N):
        for fj in range(N):
            if finVisited[fi][fj] == 0:             # 전파되지 않은 곳이 있으면 리턴
                return
            temp = max(temp, finVisited[fi][fj])    # max값 할당

    result = min(temp, result)  # 최종 결과 할당
    return

##################################################################################

result = 9999

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

N, M = map(int, sys.stdin.readline().split())
lab = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# 벽 좌표와 바이러스 좌표 담을 배열
wall = [(wi, wj) for wi in range(N) for wj in range(N) if lab[wi][wj] == 1]
virus = []

'''바이러스 좌표 탐색 후 배열에 담기'''
for i in range(N):
    for j in range(N):
        if lab[i][j] == 2:
            virus.append((i, j))

V = len(virus)

# 조합 생성
B = [0] * V
combi(0, 0, V, N, M)

if result == 9999:
    print(-1)
else:
    print(result - 1)