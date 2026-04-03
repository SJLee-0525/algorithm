import sys

l = [0] * 10001
n = int(sys.stdin.readline())

for _ in range(n):
    l[int(sys.stdin.readline())] += 1

for i in range(10001):
    if l[i] != 0:
        for j in range(l[i]):
            print(i)