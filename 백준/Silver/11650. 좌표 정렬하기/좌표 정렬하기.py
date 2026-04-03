from sys import *

l = []
n = int(stdin.readline())

for i in range(n):
    l.append(list(map(int, stdin.readline().split())))

l.sort()

for i in range(n):
    print(*l[i])