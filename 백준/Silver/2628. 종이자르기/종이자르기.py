import sys

M, N = map(int, sys.stdin.readline().rstrip().split())
x = [N]
y = [M]

T = int(sys.stdin.readline()) # 자를 횟수

for t in range(1, T + 1):
    rc, num = map(int, sys.stdin.readline().rstrip().split())
    if rc == 0:
        x.append(num)
    else:
        y.append(num)

# 정렬
x.sort() # [2, 3, 8]
y.sort() # [4, 10]

for x_i in range(len(x) - 1, 0, -1):
    x[x_i] -= x[x_i - 1] # [2, 1, 5]

for y_i in range(len(y) - 1, 0, -1):
    y[y_i] -= y[y_i - 1] # [4, 6]

square_sizes = []
for x_l in x:
    for y_l in y:
        square_sizes.append(x_l * y_l)
# [8, 12, 4, 6, 20, 30]

print(max(square_sizes))
