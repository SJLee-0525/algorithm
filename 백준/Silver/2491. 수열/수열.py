import sys

N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

# 너무 복잡하게 생각했음..
# 2중 for문으로 각자 구해주고 긴 놈으로 선택하면 됨

# 점점 증가하거나 같은 수열 길이 찾기
max_crese_cnt = crese_cnt = 1
for i in range(1, N):
    if arr[i - 1] <= arr[i]:
        crese_cnt += 1
    else:
        crese_cnt = 1
    if max_crese_cnt < crese_cnt:
        max_crese_cnt = crese_cnt

# 점점 감소하거나 같은 수열 길이 찾기
max_decrese_cnt = decrese_cnt = 1
for i2 in range(1, N):
    if arr[i2 - 1] >= arr[i2]:
        decrese_cnt += 1
    else:
        decrese_cnt = 1
    if max_decrese_cnt < decrese_cnt:
        max_decrese_cnt = decrese_cnt

# 둘 중 최대값
print(max(max_crese_cnt, max_decrese_cnt))

# for i in range(N - 1, 0, -1): # [1, 1, 0, 2, 0, 1, 2, 0, -5]
#     arr[i] -= arr[i - 1]
# print(arr)

# index = 0
# max_cnt, cnt = 0, 0
# while index < N - 1:
#     now = index
#     while arr[now] == arr[now + 1] and now < N - 1:
#         now += 1
#         cnt += 1
#             # print(arr[index], cnt)
#     index = now
#     if arr[index] > arr[index + 1]: # 뒤에 양수가 나오면 안 됨
#         while arr[now] <= 0 and now < N - 1:
#             now += 1
#             cnt += 1
#             # print(arr[index], cnt)
#         if max_cnt < cnt:
#             max_cnt = cnt
#             cnt = 0
#     elif arr[index] < arr[index + 1]:
#         while arr[now] >= 0 and now < N - 1:         
#             now += 1
#             cnt += 1
#             # print(arr[index], cnt)
#         if max_cnt < cnt:
#             max_cnt = cnt
#             cnt = 0
#     index += 1

    # print(max_cnt)