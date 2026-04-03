from sys import *

n = int(stdin.readline())
l = list(map(int, stdin.readline().split()))

sort_l = sorted(list(set(l)))

d = {}
for i in range(len(sort_l)):
    d[sort_l[i]] = i

for i in l:
    print(d[i], end = ' ')