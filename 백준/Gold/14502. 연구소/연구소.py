import sys
from collections import deque

# 조합 함수 만들기

# 얘는 깊이가 깊은지 7*7 이상 배열에서 반응이 안 옴..
# def combi(i, K):
#     if i == K:
#         if sum(B) == 3:
#             temp = []
#             for j in range(K):
#                 if B[j]:
#                     temp.append(empty_list[j])
#             new_map = [new[:] for new in room]
#             new_map[temp[0][0]][temp[0][1]] = 1
#             new_map[temp[1][0]][temp[1][1]] = 1
#             new_map[temp[2][0]][temp[2][1]] = 1
#             bfs(new_map)
#             # print(temp)
#     else:
#         B[i] = 1
#         combi(i + 1, K)
#         B[i] = 0
#         combi(i + 1, K)


# 벽의 개수가 3개로 고정이기에 사용 가능한 방식
def combi_2(K):
    for i in range(K - 2):
        for j in range(i, K - 1):
            if i != j:
                for k in range(j, K):
                    if i != j and j != k:
                        new_map = [new[:] for new in room]
                        new_map[empty_list[i][0]][empty_list[i][1]] = 1
                        new_map[empty_list[j][0]][empty_list[j][1]] = 1
                        new_map[empty_list[k][0]][empty_list[k][1]] = 1
                        # print(empty_list[i], empty_list[j], empty_list[k])
                        bfs(new_map)

# 비트마스크 쉬운 버전
# def combi_3(K):
#     for i in range(1<<K):
#         temp = []
#         for j in range(K):
#             if i & (1<<j):
#                 temp.append(empty_list[j])
#         if len(temp) == 3:
#             new_map = [new[:] for new in room]
#             new_map[temp[0][0]][temp[0][1]] = 1
#             new_map[temp[1][0]][temp[1][1]] = 1
#             new_map[temp[2][0]][temp[2][1]] = 1
#             bfs(new_map)

# 어려운 버전... 근데 원하는 결과가 안 나옴.. 연구 필요
# def combi_4(K):
#     bit_N = 2**K - 1
#     for i in range(bit_N):
#         if bin(i)[2:].count('1') == 3:
#             new_map = [new[:] for new in room]
#             for j in range(5):
#                 if i & (1<<j) != 0 :
#                     print(i, bin(i))
#                     new_map[empty_list[j][0]][empty_list[j][1]] = 1
#             print()
#             bfs(new_map)


# bfs로 바이러스를 퍼뜨리는 것을 구현
def bfs(input_map):
    global cnt
    Q = deque(virus_list) # 바이러스 좌표들을 담아 큐 생성

    while Q:
        i, j = Q.popleft()
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and input_map[mi][mj] == 0:
                input_map[mi][mj] = 2
                Q.append((mi, mj))

    # while Q:
    #     i, j = Q.popleft() # 큐에서 뽑아서 출발
    #     input_map[i][j] = 2 # 뽑은 곳은 바이러스 감염 시키고
    #     for k in range(4): # 상하좌우 중 갈 수 있는 곳을 찾아서
    #         mi, mj = i + di[k], j + dj[k]
    #         if 0 <= mi < N and 0 <= mj < M and input_map[mi][mj] == 0 and (mi, mj) not in Q:
    #             Q.append((mi, mj)) # 큐에 담음

    # 다 돌면 카운트
    c = 0
    for ii in range(N):
        for jj in range(M):
            if input_map[ii][jj] == 0:
                c += 1
    if cnt < c:
        cnt = c


N, M = map(int, sys.stdin.readline().split())
room = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

empty_list = []
virus_list = []
for i in range(N):
    for j in range(M):
        if room[i][j] == 0: # 빈 공간(벽을 세울 수 있는 공간)
            empty_list.append((i, j))
        elif room[i][j] == 2: # 바이러스 위치한 좌표
            virus_list.append((i, j))

# 델타
di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

K = len(empty_list)
cnt = -1

combi_2(K) # 함수 호출

print(cnt)