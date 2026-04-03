from sys import *

n, k = map(int, stdin.readline().split())

coin = []
for _ in range(n):
    coin.append(int(stdin.readline()))

coin.sort(reverse = True)

count = 0
for c in coin:
    if k // c >= 1:
        count += k // c
        k %= c

print(count)