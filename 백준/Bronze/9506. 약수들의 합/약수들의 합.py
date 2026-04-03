while 1:
    l = []
    n = int(input())
    for i in range(1, n):
        if n % i == 0:
            l.append(i)

    if n == -1:
        break

    elif sum(l) == n:
        print(f'{n} = ', end = '')
        for i in l[:-1]:
            print(i, end = ' + ')
        print(l[-1])

    elif sum(l) != n:
        print(f'{n} is NOT perfect.')