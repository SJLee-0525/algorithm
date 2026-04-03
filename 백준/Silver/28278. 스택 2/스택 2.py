from sys import *

n = int(stdin.readline().strip())

stack = []
prompt = []

for i in range(n):
    temp_prompt = list(map(int, stdin.readline().split()))

    if temp_prompt[0] == 1:
        stack.append(temp_prompt[1])
    elif temp_prompt[0] == 2:
        if len(stack) == 0:
            print(-1)
        else:
            pop_prompt = stack.pop()
            print(pop_prompt)
    elif temp_prompt[0] == 3:
        print(len(stack))
    elif temp_prompt[0] == 4:
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif temp_prompt[0] == 5:
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])      
    