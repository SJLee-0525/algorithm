from sys import *

l = []
n = int(stdin.readline())

for i in range(n):
    x, y = map(int, stdin.readline().split())
    l.append([y, x])

l.sort()

for i in range(n):
    l[i][0], l[i][1] = l[i][1], l[i][0]
    print(*l[i])