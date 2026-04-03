a, b, c = input().split()
a, b, c = int(a), int(b), int(c)

l = [a, b, c]
max_l = int(max(l))


if a == b == c:
    print(10000 + a * 1000)
elif a == b or a == c:
    print(1000 + 100 * a)
elif b == c:
    print(1000 + 100 * b)
else:
    print(max_l * 100)