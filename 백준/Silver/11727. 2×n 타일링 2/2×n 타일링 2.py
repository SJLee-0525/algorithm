# DP
import sys

n = int(sys.stdin.readline())

arr = [0] * (n + 1)
arr[0] = 1
arr[1] = 1

for i in range(2, n + 1):
    arr[i] = arr[i - 1] + (arr[i - 2]) * 2

print(arr[n] % 10007)