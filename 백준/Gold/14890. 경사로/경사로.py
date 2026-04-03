import sys

N, L = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

cnt = 0
# 가로 검사
for i in range(N):
    constructed = [0] * N
    for j in range(N - 1):
        if arr[i][j] == arr[i][j + 1]:          # 같으면 패스
            continue
        elif arr[i][j] + 1 == arr[i][j + 1]:    # 오르막 길이면
            if j - L + 1 < 0 or sum(constructed[j - L + 1:j + 1]) > 0:
                break # 경사로 설치 공간을 벗어나거나 설치 범위에 건설된 경사로가 있으면 중지
            for k in range(j - L + 1, j + 1): # 필요한 만큼 설치
                constructed[k] = 1
        elif arr[i][j] - 1 == arr[i][j + 1]:    # 내리막 길이면
            if j + L >= N or sum(constructed[j + 1:j + L + 1]) > 0: 
                break # 경사로 설치 공간을 벗어나거나 설치 범위에 건설된 경사로가 있다면 중지
            for k in range(j + 1, j + L + 1): # 필요한 만큼 설치
                constructed[k] = 1
        else:       # 이외에 높이 차이가 1 초과: 중지
            break
    else:
        cnt += 1

# 세로 검사
for i in range(N):
    constructed = [0] * N
    for j in range(N - 1):
        if arr[j][i] == arr[j + 1][i]:
            continue
        elif arr[j][i] + 1 == arr[j + 1][i]:
            if j - L + 1 < 0 or sum(constructed[j - L + 1:j + 1]) > 0:
                break
            for k in range(j - L + 1, j + 1):
                constructed[k] = 1
        elif arr[j][i] - 1 == arr[j + 1][i]:
            if j + L >= N or sum(constructed[j + 1:j + L + 1]):
                break
            for k in range(j + 1, j + L + 1):
                constructed[k] = 1
        else:
            break
    else:
        cnt += 1

print(cnt)