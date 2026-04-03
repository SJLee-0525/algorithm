n = int(input())

max_temp = []
for i in range(1, n + 1):  
    temp = [n, i]
    while temp[-2] - temp[-1] >= 0:
        temp.append(temp[-2] - temp[-1])
    if len(max_temp) < len(temp):
        max_temp = temp[:]

print(len(max_temp))
print(*max_temp)
