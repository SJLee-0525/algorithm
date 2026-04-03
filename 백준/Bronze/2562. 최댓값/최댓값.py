a_list = []

for i in range(9):
    n = int(input())
    a_list.append(n)
    
x = max(a_list)

print(x)
print(a_list.index(x) + 1)
