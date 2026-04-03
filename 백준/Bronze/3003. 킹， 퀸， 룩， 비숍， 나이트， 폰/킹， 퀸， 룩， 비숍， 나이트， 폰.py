my_list = list(map(int, input().split()))
or_list = [1, 1, 2, 2, 2, 8]
buy_list = []

for i in range(6):
    a = or_list[i] - my_list[i]
    buy_list.append(a)

print(*buy_list)