l = []

for i in range(3):
    a = int(input())
    l.append(a)

l_set = set(l)

if sum(l) == 180:
    if len(l_set) == 1:
        print('Equilateral')
    elif len(l_set) == 2:
        print('Isosceles')
    elif len(l_set) == 3:
        print('Scalene')

else:
    print('Error')