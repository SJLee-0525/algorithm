import sys

N, K = map(int, sys.stdin.readline().split())
temp_arr = list(map(int, sys.stdin.readline().split()))

temp_sum_arr = [0] * N
temp_sum_arr[0] = temp_arr[0]


for i in range(1, N): # 누적합 만들기
    temp_sum_arr[i] += temp_sum_arr[i - 1] + temp_arr[i]
    # [3, 1, -3, -12, -12, -9, -2, 11, 19, 16]

max_temp = temp_sum_arr[K - 1] # 초기 값은 첫 K 길이 구간의 합
for j in range(K, N): # 구간의 합 구하기 (a ~ b의 합은 b - 1까지의 누적합 - a까지의 누적합과 같음)
    if max_temp < temp_sum_arr[j] - temp_sum_arr[j - K]:
        max_temp = temp_sum_arr[j] - temp_sum_arr[j - K]

print(max_temp)