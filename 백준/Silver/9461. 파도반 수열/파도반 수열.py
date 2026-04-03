from sys import *

t = int(stdin.readline())

for _ in range(t):
    n = int(stdin.readline())

    l = [1, 1, 1]
    for __ in range(n - 3):
        l.append(sum(l[-3:-1]))
    
    print(l[-1])
        