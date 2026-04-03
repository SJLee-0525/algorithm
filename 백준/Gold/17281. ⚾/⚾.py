# from collections import deque
import sys
import itertools

N = int(sys.stdin.readline())

players = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# 4번 타자를 제외한 나머지 8명에 대한 순열 생성
line = list(range(1, 9))
lineup_lists = list(itertools.permutations(line, 8))

max_score = -1
score_list = []
for lineup_list in lineup_lists:
    line_up = list(lineup_list[:3]) + [0] + list(lineup_list[3:])
    # line_up = [*lineup_list[0:3]] + [0] + [*lineup_list[3:]]
    # print(line_up) # [1, 2, 3, 0, 4, 5, 6, 8, 7]

    t_score = 0 # 루프당 획득하는 점수 변수
    inning, out, l = 0, 0, 0            # 이닝, 아웃, 타자 순서에 참고할 인덱스
    base_1, base_2, base_3 = 0, 0, 0    
    # status = deque([0, 0, 0])
    while inning < N: 
        if players[inning][line_up[l]] == 0: # 이닝과 순열의 인덱스를 참고해 이닝과 순서에 맞는 타자 정보를 불러옴
            out += 1
            if out == 3:
                out = 0
                inning += 1
                base_1, base_2, base_3 = 0, 0, 0
        elif players[inning][line_up[l]] == 1:
            t_score += base_3
            base_1, base_2, base_3 = 1, base_1, base_2
            # status.extend([1])

            # status.append(1)
            # t_score += status.popleft()
        elif players[inning][line_up[l]] == 2:
            t_score += base_2 + base_3
            base_1, base_2, base_3 = 0, 1, base_1
            # status.extend([1, 0])

            # status.append(1)
            # status.append(0)
            # t_score += status.popleft()
            # t_score += status.popleft()
        elif players[inning][line_up[l]] == 3:
            t_score += base_1 + base_2 + base_3
            base_1, base_2, base_3 = 0, 0, 1            
            # status.extend([1, 0, 0])

            # status.append(1)
            # status.append(0)
            # status.append(0)
            # t_score += status.popleft()
            # t_score += status.popleft()
            # t_score += status.popleft()
        elif players[inning][line_up[l]] == 4:
            t_score += base_1 + base_2 + base_3 + 1
            base_1, base_2, base_3 = 0, 0, 0
            # status.extend([1, 0, 0, 0])

            # status.append(1)
            # status.append(0)
            # status.append(0)
            # status.append(0)
            # t_score += status.popleft()
            # t_score += status.popleft()
            # t_score += status.popleft()
            # t_score += status.popleft()
            # status = deque([0, 0, 0])
        l = (l + 1) % 9
    if max_score < t_score:
        max_score = t_score

print(max_score)
    
# deque랑 2진법으로는 도저히 풀 수 없는 듯..
# 변수 재할당이 그나마 빠른 방법으로 보임