import sys

n = int(sys.stdin.readline())

n_list = list(range(n, 0, -1))
target = []
stack = []
result = []
operator_result = []

for _ in range(n):
    target.append(int(sys.stdin.readline().strip()))

for t in target:
    while 1:
        if len(stack) == 0:
            stack.append(n_list.pop())
            operator_result.append('+')
        if stack[-1] == t:
            result.append(stack.pop())
            operator_result.append('-')
            break
        else:
            if len(n_list) > 0:
                stack.append(n_list.pop())
                operator_result.append('+')
            else:
                operator_result.append('NO')
                break

if 'NO' not in operator_result:
    for oper_result in operator_result:
        print(oper_result)
else:
    print('NO')