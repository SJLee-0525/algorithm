from math import *

a, b, v = map(int, input().split())

day_move = a - b
temp_v = v - a

temp_day = ceil(temp_v / day_move)
day = (temp_day + 1)

print(day)
