import sys

arr = [[0] * 1001 for _ in range(1001)]

N = int(sys.stdin.readline())

for color in range(1, N + 1):
    x_start, y_start, x_len, y_len = map(int, sys.stdin.readline().split())

    for y in range(y_start, y_start + y_len):
        for x in range(x_start, x_start + x_len):
            arr[y][x] = color
    
for color_2 in range(1, N + 1):
    count = 0
    for i in range(1001):
        for j in range(1001):  
            if arr[i][j] == color_2:
                count += 1

    print(count)
    
        