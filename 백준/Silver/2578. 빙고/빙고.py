import sys

bingo_arr = [list(map(int, sys.stdin.readline().split())) for _ in range(5)]
index_arr = list(range(0, 25))

bingo_index_dict = {bingo_arr[i // 5][i % 5]:index_arr[i] for i in range(25)}
# {11: 0, 12: 1, 2: 2, 24: 3, 10: 4, 16: 5, 1: 6, 13: 7, 3: 8, 25: 9, 6: 10, 20: 11, 5: 12, 21: 13, 17: 14, 19: 15, 4: 16, 8: 17, 14: 18, 9: 19, 22: 20, 15: 21, 7: 22, 23: 23, 18: 24}

answer_arr = [list(map(int, sys.stdin.readline().split())) for _ in range(5)]
# [[5, 10, 7, 16, 2], [4, 22, 8, 17, 13], [3, 18, 1, 6, 25], [12, 19, 23, 14, 21], [11, 24, 9, 20, 15]]

count = 0

for i in range(5):
    for j in range(5):
        count += 1

        bingo_arr[bingo_index_dict[answer_arr[i][j]] // 5][bingo_index_dict[answer_arr[i][j]] % 5] = 0 # 번호 부르면 해당 숫자 0으로 표시

        bingo = 0 # 빙고 카운트 초기화
        cross_1 = 0 # 대각선 빙고를 확인하기 위한 변수
        cross_2 = 0
        for ii in range(5):
            row = 0 # 빙고를 확인하기 위한 변수
            col = 0
            for jj in range(5):
                row += bingo_arr[ii][jj] # 가로줄의 값 더하기
                col += bingo_arr[jj][ii] # 세로줄의 값 더하기
                if ii == jj:
                    cross_1 += bingo_arr[ii][jj] # 11-5 대각선 값 더하기
                if ii + jj == 4:
                    cross_2 += bingo_arr[ii][jj] # 1-7 대각선 값 더하기

            if row == 0: # 만약 가로줄 하나의 합계가 0이면 빙고
                bingo += 1   
            if col == 0: # 만약 세로줄 하나의 합계가 0이면 빙고
                bingo += 1                
            if bingo >= 3: # 빙고 3개면 종료 (동시에 3개 이상이 되는 경우도 고려해야 함)
                break
            # print('#', count, bingo, bingo_arr)
            
        if cross_1 == 0: # 대각선 빙고는 모든 루프 다 돈 후에 확인해야 함.
            bingo += 1  
        if cross_2 == 0:
            bingo += 1 
        if bingo >= 3: 
            break
    if bingo >= 3: 
        print(count)
        break
        