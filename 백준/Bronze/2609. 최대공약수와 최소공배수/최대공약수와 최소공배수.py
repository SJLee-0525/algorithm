def prime(a):
    if a == 0 or a == 1:
        return False
    for b in range(2, int(a ** 0.5) + 1):
        if a % b == 0:
            return False
    return True

a, b = map(int, input().split())

min = min([a, b])
pr = []
for i in range(1, min + 1):
    if prime(i):
        pr.append(i)

temp = []
for p in pr:
    while 1:
        if a % p == 0 and b % p == 0:
            temp.append(p)
            a /= p
            b /= p
        else:
            break

x = 1
for i in temp:
    x *= i

print(x)
print(int(x * a * b))

