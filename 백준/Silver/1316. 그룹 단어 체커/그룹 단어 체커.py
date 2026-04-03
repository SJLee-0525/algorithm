n = int(input())
c = 0

for _ in range(n):
    s = input()
    temp_l = []

    for i in s:
        if i not in temp_l:
            temp_l.append(i)
        elif i in temp_l:
            if i != temp_l[-1]:
                temp_l.append(i)

    temp_s = set(temp_l)

    if len(temp_s) == len(temp_l):
        c += 1

print(c)