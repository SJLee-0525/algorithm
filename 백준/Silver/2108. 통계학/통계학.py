import sys

n = int(sys.stdin.readline())

num_dict = {}
for _ in range(n):
    temp = int(sys.stdin.readline())
    if temp not in num_dict:
        num_dict[temp] = 1
    else:
        num_dict[temp] += 1
    
# print(num_dict) # {1: 1, 3: 1, 8: 1, -2: 1, 2: 1}

num_sum = 0
num_list = [] 
value_key_dict = {}

for key, value in num_dict.items():
    num_sum += key * value
    num_list.extend([key] * value)
    if value not in value_key_dict:
        value_key_dict[value] = [key]
    else:
        value_key_dict[value].extend([key])

# print(value_key_dict) # {1: [1, 3, 8, -2, 2]}
sorted_value_key = sorted(value_key_dict)
sorted_max_value = sorted_value_key.pop()

if len(value_key_dict[sorted_max_value]) == 1:
    frequent_value = value_key_dict[sorted_max_value][0]
else:
    frequent_value = sorted(value_key_dict[sorted_max_value])[1]
    # print(frequent_value)

num_list.sort()

# print('---')
print(round(num_sum / n)) # 평균
print(num_list[int((n - 1) / 2)]) # 중앙
print(frequent_value)
print(num_list[-1] - num_list[0]) # 차이