import sys

M = int(sys.stdin.readline())

S = set()
for _ in range(M):
    prompt_value = sys.stdin.readline().split() 
    if len(prompt_value) > 1:
        prompt_value[1] = int(prompt_value[1])

    if prompt_value[0] == 'add':
        S.add(prompt_value[1])
    elif prompt_value[0] == 'remove':
        S.discard(prompt_value[1])
    elif prompt_value[0] == 'check':
        if prompt_value[1] in S:
            print(1)
        else:
            print(0)
    elif prompt_value[0] == 'toggle':
        if prompt_value[1] in S:
            S.discard(prompt_value[1])
        else:
            S.add(prompt_value[1])
    elif prompt_value[0] == 'all':
        S = set(range(1, 21))
    elif prompt_value[0] == 'empty':    
        S.clear()
    
