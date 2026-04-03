def prime(x):
    if x == 0 or x == 1:
        return False
    for i in range(2, int(j ** 0.5) + 1):
        if x % i == 0:
            return False
    return True

n, m = map(int, input().split())

for j in range(n, m + 1):
    if prime(j):
        print(j)

