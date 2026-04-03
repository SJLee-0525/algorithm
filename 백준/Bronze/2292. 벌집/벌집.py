n = 0
count = 1
num = int(input())

while 1:
    count += 6 * n
    n += 1
    if count >= num:
        break

print(n)
