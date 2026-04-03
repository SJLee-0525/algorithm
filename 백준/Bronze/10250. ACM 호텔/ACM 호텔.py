from sys import *

n = int(stdin.readline())

for _ in range(n):
    h, w, n = map(int, stdin.readline().split())

    i = 0
    for room in range(1, w + 1):
        for floor in range(1, h + 1):
            i += 1
            if i == n:
                break
        if i == n:
                break
    
    if len(str(room)) == 1:
        print(str(floor) + '0' + str(room))
    else:
        print(str(floor) + str(room))