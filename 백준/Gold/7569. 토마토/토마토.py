from collections import deque
import sys

def check():
    '''토마토가 전부 익었는지 검사'''
    latest = 0
    for f in range(H):
        for i in range(M):
            for j in range(N):
                if not riped[f][i][j]:          # 만약 안 익은 게 있다면 0 리턴
                    return 0
                elif latest < riped[f][i][j]:   # 익은 게 있는데, 기존 최대 날짜보다 높다면 갱신
                    latest = riped[f][i][j]
    else: # 다 문제없이 도는 데 성공하면 최대 날짜 리턴
        return latest

def ripe_tomato():
    '''토마토 익히기 (bfs)'''
    Q = deque() # Queue 생성해서, 초기 시점 익어있는 토마토의 위치들을 삽입
    for f in range(H):
        for i in range(M):
            for j in range(N):
                if box[f][i][j] == 1:     # 토마토 익어있으면
                    Q.append((f, i, j))   # Queue에 삽입하고
                    riped[f][i][j] = 1    # riped에 기록 표시 해둠
                elif box[f][i][j] == -1:  # 만약 빈 위치가 있다면
                    riped[f][i][j] = -1   # riped에 빈 위치 표시

    while Q:
        f, i, j = Q.popleft()
        for k in range(6): # 높이까지 고려한 델타 순회
            mf, mi, mj = f + df[k], i + di[k], j + dj[k]
            if 0 <= mf < H and 0 <= mi < M and 0 <= mj < N and riped[mf][mi][mj] == 0:
                Q.append((mf, mi, mj))
                riped[mf][mi][mj] = riped[f][i][j] + 1

#########################################################################################

N, M, H = map(int, sys.stdin.readline().split()) # N 가로, M 세로, H 높이
box = [[list(map(int, sys.stdin.readline().split())) for _ in range(M)] for _ in range(H)]

di = [1, 0, -1, 0, 0, 0] # 행
dj = [0, 1, 0, -1, 0, 0] # 열
df = [0, 0, 0, 0, 1, -1] # 높이

riped = [[[0] * N for _ in range(M)] for __ in range(H)] # 시간 경과 기록용

ripe_tomato()       # 함수 호출

print(check() - 1)  # 최종 검사 후 리턴된 값보다 1 낮게 출력