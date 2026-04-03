t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    test_l = list(map(int, input().split()))
    
    test_l_sort = sorted(test_l[::1], reverse = True)

    find = test_l[m]
    test_l[m] = 0
    result = []
    for test in test_l_sort:
        if test == find:
            while 1:
                if test_l[0] == find:
                    result.append(test_l.pop(0))
                    break
                elif test_l[0] == 0:
                    result.append(test_l.pop(0))
                    break
                else:
                    test_l.append(test_l.pop(0))
        else:
            while 1:
                if test == test_l[0]:
                    result.append(test_l.pop(0))
                    break
                else:
                    test_l.append(test_l.pop(0))

    print(result.index(0) + 1)

            