l = []
n = int(input())

for i in range(n):
    l.append(int(input()))

l.sort()

for i in range(n):
    print(l[i])