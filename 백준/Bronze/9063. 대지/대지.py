x_list = []
y_list = []

n = int(input())

for i in range(n):
    x, y = map(int, input().split())
    x_list.append(x)
    y_list.append(y)

x_sub = max(x_list) - min(x_list)
y_sub = max(y_list) - min(y_list)

print(x_sub * y_sub)
