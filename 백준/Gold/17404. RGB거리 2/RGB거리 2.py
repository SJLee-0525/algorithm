'''
첫번째 for문에서 첫번째 집을 무슨 색으로 칠할지 정하고, 마지막에 다를 때만 비용을 보는 것이 핵심
'''

import sys

def DP():
    global result
    
    # 색깔 정하고 시작 (나머지는 큰 수를 넣어서 방해하지 못하도록)
    for firstColor in range(3):
        dpList = [[100000001] * 3 for _ in range(N)]
        dpList[0][firstColor] = price[0][firstColor] # 하나만 할당해서 이 색으로 시작한다는 것을 명시
        
        # 문제 조건대로
        for i in range(1, N):
            dpList[i][0] = min(dpList[i - 1][1], dpList[i - 1][2]) + price[i][0]
            dpList[i][1] = min(dpList[i - 1][0], dpList[i - 1][2]) + price[i][1]
            dpList[i][2] = min(dpList[i - 1][0], dpList[i - 1][1]) + price[i][2]
        
        # 첫번째 집과 마지막 집이 다른 경우에만 result와 값 비교 후 할당
        for lastColor in range(3):
            if firstColor != lastColor:
                result = min(result, dpList[N - 1][lastColor])

##########################################################################

N = int(sys.stdin.readline()) # 집의 수
price = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

result = 100000001
DP()

print(result)