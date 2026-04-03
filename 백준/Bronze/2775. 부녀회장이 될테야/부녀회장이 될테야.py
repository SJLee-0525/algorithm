t = int(input())
for _ in range(t):
    k = int(input())
    n = int(input())

    apart = []
    zero_floor = list(range(1, n + 1))
    apart.append(zero_floor)

    for i in range(k):
        temp_floor = []
        for j in range(n):
            temp_floor.append(sum(apart[i][0:j + 1]))
        apart.append(temp_floor)

    print(apart[-1][-1])