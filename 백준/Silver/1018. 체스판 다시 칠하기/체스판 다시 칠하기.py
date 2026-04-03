from sys import *

m, n = map(int, stdin.readline().split())

board = []
for _ in range(m):
    board.append(stdin.readline().strip())

type_1 = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
type_2 = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

result = []
for y in range(m - 8 + 1):
    for x in range(n - 8 + 1):
        temp = []
        for j in range(8):
            temp.append(board[y + j][x:x + 8])
        c1 = 0
        c2 = 0
        for a in range(8):
            for b in range(8):
                if temp[a][b] != type_1[a][b]:
                    c1 += 1
                if temp[a][b] != type_2[a][b]:
                    c2 += 1
        temp_result = min([c1, c2])
        result.append(temp_result)

print(min(result))
