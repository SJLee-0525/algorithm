n = int(input())

for _ in range(n):
    temp_list = []
    
    c, s = input().split()
    c, s = int(c), str(s)

    s_list = list(s)

    for i in s_list:
        i = i * c
        temp_list.append(i)

    print(''.join(temp_list))
