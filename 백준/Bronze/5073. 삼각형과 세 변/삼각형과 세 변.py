while 1:
    a, b, c = map(int, input().split())
    l = [a, b, c]
    l.sort(reverse=True)
    l_set = set(l)
    if a == b == c == 0:
        break
    elif l[0] >= l[1] + l[2]:
        print('Invalid')
    else:
        if len(l_set) == 1:
            print('Equilateral')
        elif len(l_set) == 2:
            print('Isosceles')
        elif len(l_set) == 3:
            print('Scalene')