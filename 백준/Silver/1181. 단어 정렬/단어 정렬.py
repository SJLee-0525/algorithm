from sys import *

l = []
n = int(stdin.readline())

for i in range(n):
    l.append(stdin.readline().strip())

l = list(set(l))

l.sort()
l.sort(key=len)

for i in l:
    print(i)