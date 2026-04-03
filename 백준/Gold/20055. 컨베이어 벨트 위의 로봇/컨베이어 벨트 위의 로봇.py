from collections import deque
import sys

N, K = map(int, sys.stdin.readline().split())
belt = list(map(int, sys.stdin.readline().split()))

top_belt = deque(belt[:N])      # 위에서 보여지는 벨트
bottom_belt = deque(belt[N:])   # 아래에서 돌아가는 벨트
robot = deque([0] * N)          # 로봇의 위치 데이터

cnt = 0
while top_belt.count(0) + bottom_belt.count(0) < K:
    cnt += 1

    # 벨트 회전
    bottom_belt.appendleft(top_belt.pop())
    top_belt.appendleft(bottom_belt.pop())
    robot.appendleft(0)
    robot.pop()
    if robot[N - 1] == 1: # 내리는 곳에 도착했으면 내림
        robot[N - 1] = 0

    # 로봇 이동
    for r in range(len(robot) - 1, 0, -1):
        if robot[r] == 1:
            if (r + 1) < N and robot[r + 1] == 0 and top_belt[r + 1] > 0:
                top_belt[r + 1] -= 1 # 이동한 벨트 내구도 감소
                robot[r], robot[r + 1] = robot[r + 1], robot[r] # 로봇 이동
    if robot[N - 1] == 1: # 내리는 곳에 도착했으면 내림
        robot[N - 1] = 0

    if top_belt[0] > 0: # 시작 지점의 벨트 내구도가 존재한다면
        robot[0] = 1    # 로봇 탑승시키고
        top_belt[0] -= 1 # 해당 위치 내구도 감소

print(cnt)
