a, b = input().split()
num = list(a)
n = int(b)

temp_list = []
SUM = 0

for i in range(len(num)):
    temp = ord(num[i])
    if temp <= 57:
        temp -= 48
        temp_list.append(temp)
    else: 
        temp -= 55
        temp_list.append(temp)

for i in range(len(temp_list)):
    SUM += temp_list[i] * (n ** (len(temp_list) - (i + 1)))

print(SUM)