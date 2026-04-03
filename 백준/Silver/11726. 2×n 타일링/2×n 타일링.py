# DP
import sys

n = int(sys.stdin.readline())

arr = [0] * (n + 1)
arr[0] = 1
arr[1] = 1

for i in range(2, n + 1):
    arr[i] = arr[i - 1] + arr[i - 2]

print(arr[n] % 10007)

# 재귀 : recursionerror 발생
# def fibo_memo(n):
#     global memo 
#     if n >= 2 and memo[n] == 0:
#         memo[n] = fibo_memo(n - 1) + fibo_memo(n - 2)
#     return memo[n]

# import sys

# n = int(sys.stdin.readline())

# memo = [0] * (n + 1)
# memo[0] = 1
# memo[1] = 1

# print(fibo_memo(n) % 10007)
# print(memo)