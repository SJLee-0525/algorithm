import sys
from collections import deque

def combi(i, C, M): # 조합
    if i == C:
        if sum(B) == M: # 만약 바이러스를 놓을 수 있는 개수랑 같다면
            temp = []
            new_room = [r[:] for r in room] # 새 room 생성
            for j in range(C): 
                if B[j]: # B[1]에 해당되는 바이러스를 놓을 수 있는 애들은 바이러스 리스트에 담아 bfs에 넣어주고
                    temp.append(can_virus_list[j])
                else:    # 해당되지 않는 위치들은 0으로 바꿔줌
                    new_room[can_virus_list[j][0]][can_virus_list[j][1]] = 0
            bfs(temp, new_room) # bfs 호출
    else:
        B[i] = 1
        combi(i + 1, C, M)
        B[i] = 0
        combi(i + 1, C, M)

def bfs(virus_list, i_room):
    '''설치할 바이러스 리스트, 새롭게 생성된 맵'''
    global cnt

    visited = [[0] * N for _ in range(N)]
    Q = deque(virus_list) # 큐에 바이러스 리스트를 담아서 시작
    for vi, vj in virus_list:
        visited[vi][vj] = 1 # visited에 시작점에 해당되는 위치는 1을 놓고 시작
    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < N and visited[mi][mj] == 0 and i_room[mi][mj] != 1:
                Q.append((mi, mj))
                visited[mi][mj] = visited[i][j] + 1 # 기존 visited보다 1을 높여 저장해 시간 측정

    # print(visited)
    
    c = 0   # visited 내에 기록된 시간 측정용 변수
    wc = 0  # 벽의 개수와 비교하기 위한 변수
    for ii in range(N):
        for jj in range(N):
            if visited[ii][jj] != 0 and c < visited[ii][jj]: # 0이 아니고, c보다 visited가 크다면
                c = visited[ii][jj]     # 할당
            elif visited[ii][jj] == 0:  # 만약 0이라면
                wc += 1                 # 벽 개수 비교 변수에 추가

    if wc != wall_cnt:  # 만약 벽의 개수와 현재 계산한 0의 개수가 맞지 않다면:
        return          #  바이러스가 다 퍼지지 못한 것이므로 중단

    elif cnt > c:       # 맞다면, 현재 기록된 최소값과 비교해 최소값 할당
        cnt = c

###############################################################################################

N, M = map(int, sys.stdin.readline().split())
# 연구소 크기, 바이러스 개수

room = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

can_virus_list = []
wall_cnt = 0
for i in range(N):
    for j in range(N):
        if room[i][j] == 1: # 벽의 개수 세기
            wall_cnt += 1
        elif room[i][j] == 2: # 바이러스를 넣을 수 있는 위치들은 따로 리스트에 저장
            can_virus_list.append((i, j))

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

C = len(can_virus_list)

B = [0] * C
cnt = 2500

combi(0, C, M) # 함수 호출

if cnt == 2500: # 변한적이 없다면 -1 출력
    print(-1)
else: # 실제 visited 값보다 1 낮게 출력
    print(cnt - 1)