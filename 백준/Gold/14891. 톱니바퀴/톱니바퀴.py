from collections import deque
import sys


def check(wheel_num, prompt):
    w_index = wheel_num - 1  # 입력받은 수랑 인덱스 맞추기
    wheel_prompt = [0, 0, 0, 0]  # 움직일지 여부를 결정할 명령 모음
    wheel_prompt[w_index] = prompt  # 입력받은 애는 움직임 할당
    # print(wheel_prompt) # [0, 0, 0, 1] # 1: 시계, -1: 반시계

    w, p = w_index, prompt  # 왼쪽 면 보는 애니 6
    while 1:  # 만약에 바라보는 면의 극성이 다르면
        if 0 <= w - 1 and wheel_list[w][6] != wheel_list[w - 1][2]:
            p *= -1  # 방향을 바꿔주고
            wheel_prompt[w - 1] = p  # 해당 값에 명령 할당
            w -= 1  # 다음 범위 탐색을 위해
        else:
            break

    w, p = w_index, prompt  # 오른쪽 면 보는 애니 2
    while 1:
        if w + 1 < 4 and wheel_list[w][2] != wheel_list[w + 1][6]:
            p *= -1
            wheel_prompt[w + 1] = p
            w += 1
        else:
            break

    # print('#', wheel_prompt) # [-1, 1, -1, 1]
    # 회전 함수를 호출해 계산한 명령 모음을 전달
    rotate(wheel_prompt)


def rotate(wheel_prompt):
    global wheel_list
    # 전달받은 명령 모음을 순회하면서 명령을 수행
    for wheel_i, p_prompt in enumerate(wheel_prompt):
        if p_prompt == 1:  # 1이면 시계방향 회전
            wheel_list[wheel_i].appendleft(wheel_list[wheel_i].pop())
        elif p_prompt == -1:  # -1은 반시계방향
            wheel_list[wheel_i].append(wheel_list[wheel_i].popleft())


############################################################################
# N: 0, S: 1

# 휠 정보를 덱으로 받아서 리스트에 묶어둠. 12시방향이 0번, 11시 방향이 7번 인덱스임
wheel_list = [deque(map(int, sys.stdin.readline().strip())) for _ in range(4)]

K = int(sys.stdin.readline())
for _ in range(K):
    wheel_num, prompt = map(int, sys.stdin.readline().split())
    check(wheel_num, prompt)
# [deque([0, 0, 0, 1, 0, 1, 1, 1]), deque([1, 1, 0, 0, 0, 0, 0, 1]), deque([1, 0, 1, 0, 1, 1, 0, 1]), deque([0, 0, 1, 1, 1, 1, 0, 1])]

# 점수 계산하기
score = 0
score_board = [1, 2, 4, 8]
for i, f in enumerate(wheel_list):
    if f[0] == 1:  # 만약 톱니바퀴 12시 방향이 S극(1)이면
        score += score_board[i]  # 톱니바퀴 번호에 따라 차등 점수 계산

print(score)