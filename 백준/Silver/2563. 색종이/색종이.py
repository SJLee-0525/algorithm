import sys

paper = [[0] * 100 for _ in range(100)]

N = int(sys.stdin.readline())

for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    for i in range(y, y + 10):
        paper[i][x:x + 10] = [1] * 10 # 통째로 바꿔보기

count = 0
for ii in range(100):
    for jj in range(100):
        if paper[ii][jj] == 1:
            count += 1

print(count)
