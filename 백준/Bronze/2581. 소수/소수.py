l = []

n = int(input())
m = int(input())

for i in range(n, m + 1):
    c = 0
    for j in range(1, i + 1):
        if i % j == 0:
            c += 1
    if c == 2:
        l.append(i)

if len(l) == 0:
    print(-1)

else:
    print(sum(l))
    print(l[0])