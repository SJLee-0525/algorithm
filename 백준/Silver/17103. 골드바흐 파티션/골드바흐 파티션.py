sosu_list = [False] * 2 + [True] * 999999
for i in range(2, 1001): # prime 범위의 제곱근 (만약 10000까지면 100 + 1)
    if sosu_list[i]:
        for j in range(i * 2, len(sosu_list), i):
            sosu_list[j] = False

t = int(input())

for _ in range(t):
    n = int(input())

    c = 0
    for i in range(2, n // 2 + 1):
        if sosu_list[i] and sosu_list[n - i]:
            c += 1

    print(c)