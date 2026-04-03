import sys

N = int(sys.stdin.readline().strip())

dice_arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
result_list = [] # 시작점마다 나온 결과를 담을 리스트 생성

for start_i in range(6): # 시작점 
    i = 0 # i + 1번째 주사위
    temp = 0
    while i < len(dice_arr):
        dice = dice_arr[i]
        if start_i == 0:
            end_i = 5
            temp += max(dice[1], dice[2], dice[3], dice[4])  
        elif start_i == 1:
            end_i = 3
            temp += max(dice[0], dice[2], dice[4], dice[5])
        elif start_i == 2:
            end_i = 4  
            temp += max(dice[0], dice[1], dice[3], dice[5])         
        elif start_i == 3:
            end_i = 1
            temp += max(dice[0], dice[2], dice[4], dice[5])
        elif start_i == 4:
            end_i = 2
            temp += max(dice[0], dice[1], dice[3], dice[5])  
        elif start_i == 5:
            end_i = 0
            temp += max(dice[1], dice[2], dice[3], dice[4])  

        end_value = dice[end_i] # 시작점의 반대편에 있는 주사위 값
        
        try:
            i += 1 # 현재 주사위의 가장 상단에 있는 값과 같은 다음 주사위의 인덱스 탐색
            start_i = dice_arr[i].index(end_value) 
        except IndexError:
            pass # 초과나면 패스하자

    result_list.append(temp)
    
print(max(result_list))