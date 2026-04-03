from sys import *

n = int(stdin.readline())

for _ in range(n):
    test = int(stdin.readline())
    l = [0, 0, 1]
    for i in range(test):
        l.append(sum(l[-3:]))
    
    print(l[-1])
