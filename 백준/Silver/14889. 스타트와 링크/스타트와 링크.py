import sys

N = int(sys.stdin.readline())

arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

def ff(i, N, K):
    global min_list
    if i == N:
        if sum(b) == K:
            t = []
            f = []
            for j in range(N):
                if b[j]:
                    t.append(a[j])
                else:
                    f.append(a[j])
            # print(t, f)
            t_sum = 0
            f_sum = 0
            for ii in range(N//2):
                for jj in range(N//2):
                    if ii != jj:
                        t_sum += arr[t[ii]][t[jj]]
                        f_sum += arr[f[ii]][f[jj]]
            min_list.append(abs(t_sum - f_sum))
    else:
        b[i] = 1
        ff(i + 1, N, K)
        b[i] = 0
        ff(i + 1, N, K)
        

a = list(range(N))
b = [0] * N
# print(b)

min_list = []
ff(0, N, N//2)

# print(min_list)
print(min(min_list))

# di = {}
# for i in range(N):
#     for j in range(i, N):
#         if i != j:
#             di[(i, j)] = arr[i][j] + arr[j][i]
# print(di)
# {(0, 1): 5, (0, 2): 9, (0, 3): 6, (1, 2): 6, (1, 3): 10, (2, 3): 7}
# print('-------------')

# def f(i, N):
#     global min_list
#     if i == N:
#         a_sum = 0
#         b_sum = 0
#         for k in range(N):
#             if k == b[k]:
#                 return
#             if k < N // 2:
#                 a_sum += arr[k][b[k]]
#             else:
#                 b_sum += arr[k][b[k]]
#         print(b)
#         min_list.append(abs(a_sum - b_sum))
            
#         # for k in range(N):
#         #     if b[k]:
#         #         print(arr[k][k], end=' ')
#     for j in range(i, N):
#         b[i], b[j] = b[j], b[i]
#         f(i + 1, N)
#         b[i], b[j] = b[j], b[i]

