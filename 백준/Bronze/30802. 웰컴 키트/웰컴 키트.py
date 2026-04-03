n = int(input())

l = list(map(int, input().split()))
t, p = map(int, input().split())
shirt = 0
for ll in l:
    lll = ll // t
    if ll % t != 0:
        lll += 1
    shirt += lll

print(shirt)
print(n // p, n % p)