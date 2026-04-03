from sys import *

t = int(stdin.readline())

q = []
for _ in range(t):
    prompt = tuple(stdin.readline().split())
    
    if prompt[0] == 'push':
        q.append(prompt[1])

    elif prompt[0] == 'pop':
        if len(q) == 0:
            print(-1)
        else:
            temp = q.pop(-1)
            print(temp)

    elif prompt[0] == 'size':
        print(len(q))

    elif prompt[0] == 'empty':
        if len(q) == 0:
            print(1)
        else:
            print(0)

    elif prompt[0] == 'top':
        if len(q) == 0:
            print(-1)
        else:
            print(q[-1])

