import sys
from collections import deque

def make_cloud(N): 
    global ground
    global sky
    # sky = deque(deque([0] * N) for _ in range(N))
    for i in range(N):
        for j in range(N):
            if sky[i][j] == -1:     # 만약 하늘 상태가 -1이면 (직전에 구름이 있었다: 비가 왔었다) - 예외처리
                sky[i][j] = 0
            elif ground[i][j] >= 2: # 바구니에 물이 2 이상이면 + 직전에 구름이 없었으면
                sky[i][j] = 1       # 구름 생성
                ground[i][j] -= 2   # 바구니 물 증발

def move(direction, distance):
    global sky
    # sky = deque(deque([0] * N) for _ in range(N))
    if direction == 1:  # 좌로 이동
        for _ in range(distance):
            for s in sky:
                s.append(s.popleft())
    elif direction == 2:  # 좌상단
        for _ in range(distance):
            for s in sky:
                s.append(s.popleft())
            sky.append(sky.popleft())
    elif direction == 3:  # 상단
        for _ in range(distance):
            sky.append(sky.popleft())
    elif direction == 4:  # 우상단
        for _ in range(distance):
            for s in sky:
                s.appendleft(s.pop())
            sky.append(sky.popleft())
    elif direction == 5:  # 우
        for _ in range(distance):
            for s in sky:
                s.appendleft(s.pop())
    elif direction == 6:  # 우하단
        for _ in range(distance):
            for s in sky:
                s.appendleft(s.pop())
            sky.appendleft(sky.pop())
    elif direction == 7:  # 하단
        for _ in range(distance):
            sky.appendleft(sky.pop())
    elif direction == 8:  # 좌하단
        for _ in range(distance):
            for s in sky:
                s.append(s.popleft())
            sky.appendleft(sky.pop())

def rain(N):
    global sky
    global ground
    for i in range(N):
        for j in range(N):
            if sky[i][j] == 1:  # 구름이 있으면
                ground[i][j] += 1   # 비 온 것

def copy_water(N):
    global sky
    global ground
    di = [-1, 1, 1, -1] # 델타
    dj = [-1, -1, 1, 1]

    for i in range(N):
        for j in range(N):
            if sky[i][j] == 1: # 만약 구름이 있으면 (방금 비가 왔으면:)
                temp = 0
                for k in range(4):  # 델타를 돌면서 범위를 벗어나지 않는지 확인
                    mi, mj = i + di[k], j + dj[k] # 이 때는 범위를 초과하는 경우 넘어가는 것을 고려하지 않음
                    if 0 <= mi < N and 0 <= mj < N:
                        if ground[mi][mj] > 0:  # 만약 주변 바구니에 물이 있따면
                            temp += 1           # 물이 있는 바구니를 카운트 하고
                ground[i][j] += temp            # 해당 그라운드에 물이 있는 바구니의 수만큼 물 복사
                sky[i][j] = -1 # 다음 구름 생성을 위해서

N, M = map(int, sys.stdin.readline().split()) # 격자 크기 / 이동 횟수
ground = deque(deque(map(int, sys.stdin.readline().split())) for _ in range(N))
sky = deque(deque([0] * N) for _ in range(N))
sky[N - 1][0] = sky[N - 1][1] = sky[N - 2][0] = sky[N - 2][1] = 1 # 초기 구름 생성

for __ in range(M - 1): # 초기 구름 생성 때문에 순서가 애매해서 한 번 덜 돌고 나중에 더 함
    direction, distance = map(int, sys.stdin.readline().split()) # d 이동 방향 정보 / s 거리 정보
    move(direction, distance)
    rain(N)
    copy_water(N)
    make_cloud(N)
    # print(sky)

direction, distance = map(int, sys.stdin.readline().split()) # d 이동 방향 정보 / s 거리 정보
move(direction, distance)
rain(N)
copy_water(N)
make_cloud(N)

# print(ground)

s = 0
for g in ground:
    s += sum(g)
print(s)
