import sys
from collections import deque

def perm(i, K):
    '''순열로 모든 명령의 순서를 만들어 시뮬레이션'''
    if i == K:
        rotate_prompt(prompt_list) # 명령 순서 생성되면 명령 함수 호출
    else:
        for j in range(i, K):
            prompt_list[i], prompt_list[j] = prompt_list[j], prompt_list[i]
            perm(i + 1, K)
            prompt_list[i], prompt_list[j] = prompt_list[j], prompt_list[i]

def rotate_prompt(prompt_list):   
    '''반입된 순서로 명령을 뽑는 함수'''
    new_arr = [a[:] for a in arr] # 맵 복제로 시작
    for pr, pc, ps in prompt_list: # 각 명령별 시작, 종료 인덱스를 계산
        si, sj, ei, ej = pr - ps - 1, pc - ps - 1, pr + ps - 1, pc + ps - 1
        new_arr = rotate(new_arr, si, sj, ei, ej) # 시작, 종료점을 기준으로 돌리는 함수 호출하고 결과를 새로 생성한 맵에 할당
        # print(new_arr)
    cal_v(new_arr) # 다 돌고 나오면 계산 함수 호출

def rotate(n_arr, si, sj, ei, ej):
    '''회전하는 동작을 수행하는 함수'''
    temp_arr = [[0] * M for _ in range(N)]  # 원본과 크기가 동일한 빈 맵 생성
    i, j, k = si, sj, 0                     # 시작점 할당
    # print(si, sj, ei, ej)
    while 1: 
        mi, mj = i + di[k], j + dj[k] # 델타
        # print(mi, mj)
        if si <= mi <= ei and sj <= mj <= ej and temp_arr[mi][mj] == 0: # 만약 새 맵에 값이 아직 없고, 인덱스를 벗어나지 않았다면
            temp_arr[mi][mj] = n_arr[i][j]  # 새로 생성한 빈 맵의 좌표에 기존 맵의 기존 좌표의 값을 할당
            i, j = i + di[k], j + dj[k]     # 이동
        else:   # 만약 해당 방향으로 더 이상 이동할 수 없으면
            k += 1  # 방향 바꿈
            if k == 4: # 만약 4방향 다 돌았으면
                ii, jj = i + 1, j + 1 # 대각선으로 이동해서 다시 탐색

                if temp_arr[ii][jj] != 0: # 만약 대각선으로 이동한 곳에 값이 있다면
                    r_arr = putting(n_arr, temp_arr) # 더 돌 필요 없으니 합치는 함수 호출
                    return r_arr    # 합친 결과 반환
                elif ii == si + ((ei - si) // 2) and jj == sj + ((ej - sj) // 2): # 만약 범위의 크기가 홀수라 마지막 하나가 남는다면
                    temp_arr[ii][jj] = n_arr[ii][jj]    # 그냥 원래 값 담아주고
                    r_arr = putting(n_arr, temp_arr)    # 합치는 함수 호출
                    return r_arr    # 합친 결과 반환
                else:               # 대각선으로 이동해 더 탐색할 수 있으면
                    k = 0           # 방향 초기화
                    i, j = ii, jj   # 대각선으로 이동

def putting(n_arr, temp_arr):
    '''새로 생성한 빈맵과, 기존 맵을 합치는 함수'''
    for i in range(N):
        for j in range(M):
            if temp_arr[i][j] == 0: # 만약 새로 생성한 빈 맵의 해당 좌표 값이 0이면
                temp_arr[i][j] = n_arr[i][j]    # 기존 맵에서 해당 좌표 값 가져와 할당
    return temp_arr     # 합쳐진 맵 반환
    
def cal_v(new_arr):
    '''각 행의 합 값을 계산해 최소값 할당하는 함수'''
    global result
    for m_arr in new_arr:
        if result > sum(m_arr):
            result = sum(m_arr)    


#######################################################################################

N, M, K = map(int, sys.stdin.readline().split()) # 세로, 가로, 연산 수
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# 명령 모음
prompt_list = [] 
for _ in range(K):
    r, c, s = map(int, sys.stdin.readline().split())
    prompt_list.append((r, c, s))

# 달팽이 배열과 비슷한 형태로 델타 구성
di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

result = 1000001

perm(0, K) # 순열 함수 호출

print(result)