import sys

n = int(sys.stdin.readline().strip())

liquid_list = list(map(int, sys.stdin.readline().split()))
liquid_list.sort() # [-99, -2, -1, 4, 98]

temp_result_dict = {}
pointer_1, pointer_2 = 0, len(liquid_list) - 1
while pointer_1 < pointer_2:
    temp_result = liquid_list[pointer_1] + liquid_list[pointer_2]
    if abs(temp_result) not in temp_result_dict:
        temp_result_dict[abs(temp_result)] = (liquid_list[pointer_1], liquid_list[pointer_2])
        if temp_result == 0:
            break
    if temp_result > 0:
        pointer_2 -= 1
    else:
        pointer_1 += 1

abs_key_value = list(temp_result_dict.keys())
abs_key_value.sort()
# print(temp_result_dict)
# print(abs_key_value) # [1, 2, 2, 3, 3, 4, 8, 95, 96, 97, 100, 101, 102]

if abs_key_value[0] in temp_result_dict:
    print(temp_result_dict[abs_key_value[0]][0], temp_result_dict[abs_key_value[0]][1])
elif -(abs_key_value[0]) in temp_result_dict:
    print(temp_result_dict[-(abs_key_value[0])][0], temp_result_dict[-(abs_key_value[0])][1])