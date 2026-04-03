import sys

nine_p = [int(sys.stdin.readline()) for _ in range(9)]

for i in range(1<<len(nine_p)):
    total_h = 0
    total_c = 0
    temp_list = []
    for j in range(len(nine_p)):
        if i & (1<<j):
            temp_list.append(nine_p[j])
            total_c += 1
            total_h += nine_p[j]
    if total_h == 100 and total_c == 7:
        break

temp_list.sort()
for p in temp_list:
    print(p)