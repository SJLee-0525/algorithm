import sys

def throwIce(dir:int, dist:int):
    '''
    얼음 파편 던져서 구슬 파괴하기
    상 1, 하 2, 좌 3, 우 4
    '''
    for currDist in range(1, dist + 1):
        ci, cj = si + (pi[dir] * currDist), sj + (pj[dir] * currDist)
        if 0 <= ci < N and 0 <= cj < N:
            board[ci][cj] = 0

def thread(i, j):
    '''
    벽 모양 따라서 구슬을 꿰며 1차원 배열로 나열하기
    '''
    idx = k = 0

    # 벽 모양 따라서 구슬 꿰기
    while (i, j) != (0, 0):
        checked[i][j] = 1

        tmi, tmj = i + di[(k + 1) % 4], j + dj[(k + 1) % 4]
        if not checked[tmi][tmj]:   # 방향 전환
            k = (k + 1) % 4

        i += di[k]
        j += dj[k]

        if not board[i][j]: # 파괴된 구슬은 건너뛰기
            continue

        rowBeads[idx] = board[i][j]
        idx += 1

    # 다 꿰면 배열의 나머지 뒷 부분은 0으로 재할당하기
    while idx < len(rowBeads):
        rowBeads[idx] = 0
        idx += 1

def bomb():
    '''4개 이상으로 연속하는 구슬들 폭발시키기'''
    global result

    isBombed = False    # 폭발 여부 확인

    cnt = 1             # 연속한 구슬 개수 확인용
    for idx in range(1, len(rowBeads)):
        if idx <= len(rowBeads) - 2 and rowBeads[idx - 1] == rowBeads[idx]:
            cnt += 1    # 이전 구슬과 현재 구슬이 같으면 카운트 증가
        else: # 앞의 구슬과 현재 구슬이 다르거나, 배열의 마지막 요소라면
            if cnt >= 4 and rowBeads[idx - 1] != 0: # 만약 연속한 구슬이 4개 이상이라면 (단 0일 경우 제외)
                isBombed = True                     # 폭발 표시
                result += cnt * rowBeads[idx - 1]   # 점수 계산
                for bi in range(idx - cnt, idx):    # 폭발 범위 만큼 0으로 재할당
                    rowBeads[bi] = 0

            cnt = 1     # 연속한 구슬 개수 1로 초기화

    return isBombed     # 폭발 여부 반환

def move():
    '''구슬이 앞으로 이동하며 빈 자리 채우기'''
    global rowBeads

    ti = 0
    for i in range(len(rowBeads)):          # 임시 배열에 값이 있는 구슬들만 담기
        if rowBeads[i]:
            tempRowBeads[ti] = rowBeads[i]
            ti += 1

    for ei in range(ti, len(tempRowBeads)): # 나머지 뒷부분은 0으로 재할당
        tempRowBeads[ei] = 0

    rowBeads = tempRowBeads[:]              # 재할당

def trans():
    '''구슬 변환'''
    global rowBeads

    cnt = 1
    ti = 0
    for idx in range(0, len(rowBeads) - 1):
        if not rowBeads[idx]:               # 만약 구슬이 없으면
            while ti < len(tempRowBeads):   # 뒷부분은 다 0으로 초기화
                tempRowBeads[ti] = 0
                ti += 1
            rowBeads = tempRowBeads[:]
            return

        if rowBeads[idx] == rowBeads[idx + 1]:  # 구슬이 뒷 구슬과 같다면 카운트 증가
            cnt += 1
        else:                               # 뒷 구슬이 앞의 구슬과 다르면
            group = (cnt, rowBeads[idx])    # 그룹 구슬 개수, 구슬 번호
            for bead in group:              # 변환 시키기
                tempRowBeads[ti] = bead
                ti += 1
                if ti >= len(tempRowBeads): # 만약 구슬이 칸의 개수보다 초과할 경우
                    rowBeads = tempRowBeads[:]  # 재할당 후 중단
                    return
            cnt = 1

def rowToGrid(i, j):
    '''1차원 구슬 배열을 다시 2차원 배열로 변환'''
    idx = k = 0

    while (i, j) != (0, 0):
        checked[i][j] = 0

        tmi, tmj = i + di[(k + 1) % 4], j + dj[(k + 1) % 4]
        if checked[tmi][tmj]:       # 방향 전환
            k = (k + 1) % 4

        i += di[k]
        j += dj[k]

        board[i][j] = rowBeads[idx] # 할당
        idx += 1

#############################################################################

N, M = map(int, sys.stdin.readline().split())

board = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
prompts = [tuple(map(int, sys.stdin.readline().split())) for _ in range(M)]

pi, pj = [0, -1, 1, 0, 0], [0, 0, 0, -1, 1]
di, dj = [-1, 0, 1, 0], [0, -1, 0, 1]

si = sj = N // 2
result = 0

checked = [[0] * N for _ in range(N)]
rowBeads = [0] * (N ** 2 - 1)
tempRowBeads = rowBeads[:]  # 임시 배열

for dir, dist in prompts:
    throwIce(dir, dist)     # 얼음 파편 던져서 구슬 파괴하기
    thread(si, sj)          # 구슬 일렬로 만들기

    while bomb():           # 구슬 폭파: 만약 폭발하지 않았다면 더 폭발할 게 없으니까 중단
        move()              # 구슬 이동

    trans()                 # 구슬 변환
    rowToGrid(si, sj)       # 배열에 다시 옮겨 담기

print(result)