import sys

arr = [[0] * 100 for _ in range(100)]

for __ in range(4):
    start_col, start_row, end_col, end_row = map(int, sys.stdin.readline().strip().split())
    
    for i in range(start_col, end_col):
        for j in range(start_row, end_row):
            if arr[i][j] == 0:
                arr[i][j] = 1

count = 0
for mini_arr in arr:
    for elem in mini_arr:
        if elem == 1:
            count += 1

print(count)