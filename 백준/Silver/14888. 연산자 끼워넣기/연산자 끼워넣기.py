import sys

def try_cal(input_op):
    global arr
    r = arr[0]
    for i in range(len(input_op)):
        if input_op[i] == 0:
            r += arr[i + 1]
        elif input_op[i] == 1:
            r -= arr[i + 1]
        elif input_op[i] == 2:
            r *= arr[i + 1]
        elif input_op[i] == 3:
            if r >= 0:
                r //= arr[i + 1]
            else:
                r = -(abs(r) // arr[i + 1])
    return r
def perm(i, N):
    global op_list
    global result_list
    global cnt
    if i == N:
        # print(op_list)
        cnt += 1
        result_list.append(try_cal(op_list))
    else:
        for j in range(i, N):
            op_list[i], op_list[j] = op_list[j], op_list[i]
            perm(i + 1, N)
            op_list[i], op_list[j] = op_list[j], op_list[i]

N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
operators = list(map(int, sys.stdin.readline().split()))
# +, -, *, /

op_list = [i for i, j in enumerate(operators) if j for _ in range(j)]
b = [0] * len(op_list)

# print(op_list)

cnt = 0
result_list = []
perm(0, len(op_list))

print(max(result_list))
print(min(result_list))
