import sys

R, C, N = map(int, sys.stdin.readline().split())
arr = [list(sys.stdin.readline().rstrip()) for _ in range(R)]

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

if N <= 1:
    for i in range(R):
        print(''.join(arr[i]))

elif N % 2 == 0:
    for i in range(R):
        print('O' * C)

else:
    # 첫번째 폭탄이 터진 상태
    bomb1 = [['O'] * C for i in range(R)]
    for i in range(R):
        for j in range(C):
            if arr[i][j] == 'O':
                bomb1[i][j] = '.'
            else:
                for k in range(4):
                    mi, mj = i + di[k], j + dj[k]
                    if 0 <= mi < R and 0 <= mj < C and arr[mi][mj] == 'O':
                        bomb1[i][j] = '.'
                        break

    # 두번째 폭탄이 터진 상태
    bomb2 = [['O'] * C for i in range(R)]
    for i in range(R):
        for j in range(C):
            if bomb1[i][j] == 'O':
                bomb2[i][j] = '.'
            else:
                for k in range(4):
                    mi, mj = i + di[k], j + dj[k]
                    if 0 <= mi < R and 0 <= mj < C and bomb1[mi][mj] == 'O':
                        bomb2[i][j] = '.'
                        break

    if N % 4 == 3:
        for li in bomb1: print(''.join(li))
    if N % 4 == 1:
        for li in bomb2: print(''.join(li))

