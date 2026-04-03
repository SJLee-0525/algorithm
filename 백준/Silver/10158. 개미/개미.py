import sys

w, h = map(int, sys.stdin.readline().split()) # w: 너비 / h: 높이
p, q = map(int, sys.stdin.readline().split()) # p, q = 열(j), 행(i) 순임
H = int(sys.stdin.readline())

w_range = [i for i in range(w)] + [i for i in range(w, 0, -1)] # [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
h_range = [i for i in range(h)] + [i for i in range(h, 0, -1)] # [0, 1, 2, 3, 4, 3, 2, 1]

ans_p = w_range[(p + H) % (w * 2)] # 공식?
ans_q = h_range[(q + H) % (h * 2)] # 위와 같은 배열을 만들어 두고, 원래 값에서 시간을 더한 후 배열의 길이만큼 나눈 나머지의 인덱스가 정답

print(ans_p, ans_q)

# 얘는 시간 초과남 부글부글
######################################################################################

# import sys

# w, h = map(int, sys.stdin.readline().split()) # w: 너비 / h: 높이
# p, q = map(int, sys.stdin.readline().split()) # p, q = 열(j), 행(i) 순임
# H = int(sys.stdin.readline())

# pi, qi = 1, 1
# for hour in range(H):
#     if p + pi < 0 or p + pi > w: # 열 좌표가 너비 범위를 벗어나려 하면 방향 바꿔줌
#         pi *= -1
#     if q + qi < 0 or q + qi > h: # 행 좌표가 너비 범위를 벗어나려 하면 방향 바꿔줌
#         qi *= -1
#     p += pi
#     q += qi

# print(p, q)

# 델타 방식 메모리 초과남
######################################################################################

# # 평상시 2차원 배열 인덱스랑 문제 방식이 달라서 헷갈림 ㅜ
# # 말이 어렵지만 행열 각자 배열의 끝에 도달하면 방향을 바꿔주면 되는 문제
# import sys

# w, h = map(int, sys.stdin.readline().split()) # w: 너비 / h: 높이
# p, q = map(int, sys.stdin.readline().split()) # p, q = 열(j), 행(i) 순임
# H = int(sys.stdin.readline())

# ground = [[0] * (w + 1) for _ in range(h + 1)]

# i, j = q, p
# di, ki = [1, -1], 0 # 방향 바꿀 때 사용할 델타와 인덱스
# dj, kj = [1, -1], 0

# # 시간 될 때 까지 돔
# hour = 0
# while hour < H: 
#     # print(i, j)
#     ground[i][j] = 1 # 확인차 현 위치에 깃발 꼽기
#     hour += 1
#     if i + di[ki] < 0 or i + di[ki] > h: # 세로방향 이동하다가 배열의 끝에 도달하면 방향 전환
#         ki = (ki + 1) % 2
#     if j + dj[kj] < 0 or j + dj[kj] > w: # 가로방향 이동하다가 배열의 끝애 도달하면 방향 전환
#         kj = (kj + 1) % 2
#     i += di[ki]
#     j += dj[kj]   

# print(j, i) # 문제 방식에 맞춰 뒤집어 출력


