import sys

def painting():
    temp = [[100000001] * 3 for _ in range(N)]  # arr와 같은 크기의 배열 생성
    temp[0] = arr[0]            # 첫번째 레벨은 arr의 첫 레벨과 같은 값으로 할당

    for lv in range(1, N): # 2번째 레벨부터 N번째 레벨까지 탐색하며 최소 비용 계산
        temp[lv][0] = min(temp[lv - 1][1], temp[lv - 1][2]) + arr[lv][0]
        temp[lv][1] = min(temp[lv - 1][0], temp[lv - 1][2]) + arr[lv][1]
        temp[lv][2] = min(temp[lv - 1][0], temp[lv - 1][1]) + arr[lv][2]

    return min(temp[N - 1]) # 마지막 단계에서 최소 비용을 출력
#######################################################################

N = int(sys.stdin.readline())
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

print(painting())