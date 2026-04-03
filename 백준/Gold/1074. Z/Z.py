import sys
# import time

def Z_search(si, sj, ei, ej, lev, r, c, N, min_val, max_val):
    if lev == N:    # 최대 레벨에 도달했을 때 (2 * 2 배열이 되면) : 
        # 가지를 치면서 들어왔기에 여기 안에서 딱히 조건 달 필요는 없을 듯
        global rst
        cnt = -1
        # Z 모양으로 순회하면서
        for i in range(si, ei):
            for j in range(sj, ej):
                cnt += 1 # 하나 갈 때마다 1씩 더하고
                if i == r and j == c:
                    rst = min_val + cnt
                    # 순회한 만큼 해당 함수의 최소값에 더해 정답에 할당
        return

    # 최대 레벨에 도달하지 않았다면 (배열의 각 사이즈가 2보다 크다면)
    mi = (si + ei) // 2 # 중간 값 지정
    mj = (sj + ej) // 2
    '''
    1 2
    3 4
    '''
    # 위 주석 순으로 (Z형태) 박스를 쪼개어 재귀 호출
    # 다 돌리니까 시간초과 메모리초과 난리남.
    # 가지를 재귀를 부르기 전에 쳐서, 입력받은 조건에 부합하는 재귀만 돌려보자.
    if si <= r < mi and sj <= c < mj:   # 1
        Z_search(si, sj, mi, mj, lev + 1, r, c, N, min_val, min_val + (abs(max_val - min_val) * 0.25))
    elif si <= r < mi and mj <= c < ej: # 2
        Z_search(si, mj, mi, ej, lev + 1, r, c, N, min_val + (abs(max_val - min_val) * 0.25), min_val + (abs(max_val - min_val) * 0.5))
    elif mi <= r < ei and sj <= c < mj: # 3
        Z_search(mi, sj, ei, mj, lev + 1, r, c, N, min_val + (abs(max_val - min_val) * 0.5), min_val + (abs(max_val - min_val) * 0.75))
    elif mi <= r < ei and mj <= c < ej: # 4
        Z_search(mi, mj, ei, ej, lev + 1, r, c, N, min_val + (abs(max_val - min_val) * 0.75), max_val)

#####################################################################################

N, r, c = map(int, sys.stdin.readline().split())

arr_len = 1 << N
# arr = [[0] * arr_len for _ in range(arr_len)] # <<< 배열 쓰니까 메모리 초과남 << 배열 안쓰니 시간 초과남 하..

# stt = time.perf_counter()

rst = 0
Z_search(0, 0, arr_len, arr_len, 0, r, c, N, 0, arr_len * arr_len)

print(int(rst))

# print(time.perf_counter() - stt, 's')