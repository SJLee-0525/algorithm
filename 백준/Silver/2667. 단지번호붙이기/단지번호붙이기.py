import sys
from collections import deque

def find_apartment(N):
    count = 0
    for i in range(N):
        for j in range(N):
            if complex[i][j]:
                bfs(i, j)
                count += 1 # bfs 돈 횟수 : 동 개수
    else:
        return count

def bfs(si, sj):
    Q = deque()
    Q.append((si, sj))
    checked[si][sj] = 1
    len_apart = 1
    while Q:
        i, j = Q.popleft()
        complex[i][j] = 0 # 다른 동 탐색할 때 걸리적 거리는 일 없게 변경
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < N and checked[mi][mj] == 0 and complex[mi][mj] == 1:
                Q.append((mi, mj))
                checked[mi][mj] = 1
                len_apart += 1

    apartment_len.append(len_apart) # 종료 전 동 길이 리스트에 삽입

###################################################################################

N = int(sys.stdin.readline())
complex = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

checked = [[0] * N for _ in range(N)]
apartment_len = [] # 각 동의 길이 담을 리스트

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

num = find_apartment(N)
apartment_len.sort()

print(num)
for apart in apartment_len:
    print(apart)
