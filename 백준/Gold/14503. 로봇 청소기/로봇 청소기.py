import sys

N, M = map(int, sys.stdin.readline().split()) # 방의 크기
r, c, d = map(int, sys.stdin.readline().split()) # 시작 좌표, 방향
# 0 북 / 1 동 / 2 남 / 3 서

arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

di = [-1, 0, 1, 0] # 북 동 남 서
dj = [0, 1, 0, -1]
k = d
i, j = r, c 
cnt = 0

while 1:
    # print(i, j)
    # print(cnt)
    # print(arr)
    if arr[i][j] == 0:  # 청소하기
        cnt += 1
        arr[i][j] = 3 
    
    if 0 < i < N - 1 and 0 < j < M - 1 and (0 in [arr[i - 1][j], arr[i][j + 1], arr[i + 1][j], arr[i][j - 1]]):
         # 주변에 청소하지 않은 칸이 있다면        
        while 1:
            k = (k + 3) % 4  # 90도 회전
            if arr[i + di[k]][j + dj[k]] == 0:
                i += di[k]
                j += dj[k] 
                break # 90도 회전 멈춤

    else: # 주변이 다 청소됐다면
        if 0 <= i + (di[k] * -1) < N and  0 <= j + (dj[k] * -1) < M and arr[i + (di[k] * -1)][j + (dj[k] * -1)] != 1:   
            # 방향을 유지한 채로 뒤가 벽이 아니라면
            i += (di[k] * -1)     # 후진
            j += (dj[k] * -1) 
        else:   # 뒤가 벽이라면
            break

print(cnt)
