n = int(input())

if n % 5 == 0:
    print(n // 5)

else:
    c = 0
    while n > 0:
        n -= 3
        c += 1
        if n % 5 == 0:
            print(n // 5 + c)
            break

        elif n == 1 or n == 2:
            print(-1)

        elif n == 0:
            print(c)