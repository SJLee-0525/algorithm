import sys

t = int(sys.stdin.readline())

for _ in range(t):
    v = list(sys.stdin.readline().strip())
        
    c = 0
    for i in v:
        if i == '(':  
            c += 1
        if i == ')':
            c -= 1
        if c < 0:
            break
    if c != 0:
        print('NO')
    if c == 0:
        print('YES')