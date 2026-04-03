cap = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
cap_list = list(cap)
temp_list = []

num, n = map(int, input().split())

while 1:
    temp_list.append(num % n)
    num //= n

    if num < n:
        temp_list.append(num)
        break

if temp_list[-1] == 0:
    del temp_list[-1]

temp_list = temp_list[::-1]
result_list = []

for i in temp_list:
    result_list.append(cap_list[i])

result = ''.join(result_list)
print(result)