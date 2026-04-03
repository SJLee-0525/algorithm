import sys
from collections import deque

N = int(sys.stdin.readline())
arr = deque(map(int, sys.stdin.readline().split())) # 주어지는 현재 대기열
temp = [] # 임시 대기열 공간

for target in range(1, N + 1): # 1부터 차례로 타겟값 제공
    while 1:
        if arr and target == arr[0]: # 만약 현재 대기열에 사람이 있고 첫번째 사람이 타겟과 같다면
            arr.popleft()   # 뽑고 break해 다음 타겟값 제공하도록
            break # while 1

        elif temp and target == temp[-1]: # 만약 임시 대기열에 사람이 있고 마지막 사람이 타겟과 같다면
            temp.pop()  # 스택의 뒤에서 뽑고 break해 다음 타겟값 제공하도록
            break

        elif arr and target != arr[0]: # 위의 사항에 해당사항이 없고 만약 현재 대기열에 사람이 있는데, 타겟과 같지 않다면
            temp.append(arr.popleft())  # 임시 대기열로 이동 후 다시 while 반복

        else:   # 위 세가지 조건문에 해당되는 게 없다면 
            break   # 다음 반복문으로

if arr or temp: # 만약 다 돌았는데, arr나 temp에 사람이 남아있다면
    print('Sad')
else:           # 다 비었다면
    print('Nice')





