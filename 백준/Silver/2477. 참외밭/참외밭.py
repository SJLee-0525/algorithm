import sys

melon = int(sys.stdin.readline()) # 면적당 참외 생산량

coord = [tuple(map(int, sys.stdin.readline().split())) for _ in range(6)] # [(4, 50), (2, 160), (3, 30), (1, 60), (3, 20), (1, 100)]

# 가로변, 세로변끼리 묶음
x_list = [x for x in coord if x[0] == 1 or x[0] == 2] # [(2, 160), (1, 60), (1, 100)]
y_list = [y for y in coord if y[0] == 3 or y[0] == 4] # [(4, 50), (3, 30), (3, 20)]

x_value, y_value = max(x_list, key=lambda x:x[1]), max(y_list, key=lambda y:y[1]) # 변의 길이가 가장 큰 것들 찾기
x, y = x_value[1], y_value[1] # [(4, 50), (2, 160), (3, 30), (1, 60), (3, 20), (1, 100)]

x_i = coord.index(x_value) # 가장 큰 변의 길이를 가진 애들의 인덱스를 구함
y_i = coord.index(y_value)
value_index = [x_i, y_i] # 1 0

# 얘네랑 인접한 애들은 작은 사각형의 변이 아니므로 인접한 index를 구해줌
min_i = min(value_index)
max_i = max(value_index)
if min_i == 0 and max_i == 5: # 만약 min_i, max_i 값이 이렇게 입력되면 인접한 index 찾기 위해서 조정해 줘야함
    min_i, max_i = 5, 0

min_near_i = min_i - 1  # 서로 인접한 index 계산
if min_near_i < 0:
    min_near_i += 6
max_near_i = max_i + 1
if max_near_i >= 6:
    max_near_i -= 6

# print(x_i, y_i, max_near_i, min_near_i)
# 인접하지 않은 변들의 index 구하기
small_value = []
for num in range(6):
    if num not in [x_i, y_i, max_near_i, min_near_i]: # 1, 0, 2, 5
        small_value.append(coord[num])

# 인접하지 않은 변의 크기
xx, yy = small_value[0][1], small_value[1][1] # 60 20

# 면적 구하고, 참외 생산량 계산
area = (x * y) - (xx * yy)
result = area * melon

print(result)
