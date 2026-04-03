import sys

def fd(i_num):
    i = i_num  # 입력 받은 값을 인덱스 값으로 할당
    max_c = 0  # 최대값 변수
    while 0 < i: # i가 0보다 큰 동안
        i -= 1   # 아래로 내려가면서 최대값을 비교하고 할당
        if max_c < in_arr[i]:
            max_c = in_arr[i]
    in_arr[i_num] = max_c + 1 # 다 돌면 최대값보다 1 높여서 해당 자리에 수열 길이 할당

#############################################################

N = int(sys.stdin.readline()) # 수열 길이
num_arr = list(map(int, sys.stdin.readline().split())) # 수열 

in_arr = [0] * 1001     # 수의 최대 크기가 1000이니까
in_arr[num_arr[0]] = 1  # 수열의 첫번째 요소는 길이 1로 할당

for i in range(1, N):   # 2번째 요소부터 돌면서
    fd(num_arr[i])      # 함수 호출해서 수열 길이 달아줌
    # print(num_arr[i], max(in_arr))

print(max(in_arr))      # 최대 길이 출력

