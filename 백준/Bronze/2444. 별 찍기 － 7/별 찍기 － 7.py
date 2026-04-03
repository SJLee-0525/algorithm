n = int(input())

for i in range(-n + 1, n):
    i = abs(i)

    print(' ' * i +'*' * (((n - i) * 2) - 1))