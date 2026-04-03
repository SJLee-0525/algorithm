n, m = map(int, input().split())
x = []
y = []
z = []

for i in range(n):
    x.append(list(map(int, input().split())))

for j in range(n):
    y.append(list(map(int, input().split())))

for k in range(n):
    d = [(a + b) for a, b in zip(x[k], y[k])]
    z.append(d)

for h in z:
    print(*h)