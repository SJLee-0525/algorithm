import sys

def cal_N(i_N, c):
    global count
    if count < c:
        return
    if i_N == 1:
        if count > c:
            count = c
        return
    if i_N % 3 == 0:
        cal_N(i_N // 3, c + 1)
    if i_N % 2 == 0:
        cal_N(i_N // 2, c + 1)
    cal_N(i_N - 1, c + 1)


N = int(sys.stdin.readline())
count = 100000

cal_N(N, 0)
print(count)