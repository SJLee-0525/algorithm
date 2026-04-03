l = []

n, k = map(int, input().split())
k_i = k - 1

for i in range(1, n + 1):
    if n % i == 0:
        l.append(i)

if len(l) < k:
    print(0)
else:
    print(l[k_i])