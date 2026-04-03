n = int(input())
l = list(map(int, input().split()))
c = 0

for i in l:
    l2 = []
    for j in range(1, i):
        if i % j == 0:
            l2.append(j)
    if len(l2) == 1:
        c += 1

print(c)
