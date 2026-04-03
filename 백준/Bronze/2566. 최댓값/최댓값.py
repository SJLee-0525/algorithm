n = 9

c_list = []
big_list = []
big_list_2 = []

for i in range(n):
    small_list = list(map(int, input().split()))
    c = small_list.index(max(small_list)) + 1, max(small_list)
    big_list.append(list(c))

for i in range(n):
    c_list.append(big_list[i][0])
    big_list_2.append(big_list[i][1])

c2 = big_list_2.index(max(big_list_2)) + 1
r = (c_list[c2 - 1])

print(max(big_list_2))
print(c2, r)
