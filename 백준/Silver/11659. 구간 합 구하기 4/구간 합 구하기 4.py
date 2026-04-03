import sys

N, M = map(int, sys.stdin.readline().split()) # N 수의 개수 / M 합을 구해야 하는 횟수
arr = [0] + list(map(int, sys.stdin.readline().split())) # 편의상 0을 붙임

for n in range(1, N + 1): 
    arr[n] += arr[n - 1]
# [0, 5, 9, 12, 14, 15] 구간합 만들기

for _ in range(M):
    i, j = map(int, sys.stdin.readline().split()) # i번째부터 j번째까지의 수의 합

    print(arr[j] - arr[i - 1])