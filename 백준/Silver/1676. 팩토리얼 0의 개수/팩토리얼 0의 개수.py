n = int(input())

a = 0
x = 5
y = 1
while 1:
    xy = x ** y
    if xy > n:
        break
    a += n // xy
    y += 1

print(a)