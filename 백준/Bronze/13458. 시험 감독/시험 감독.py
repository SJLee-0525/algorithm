import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
B, C = map(int, input().split())

print(N + sum(map(lambda x: (max(x - B, 0) + C - 1) // C, A)))