total = int(input())
r = int(input())
temp = 0

for i in range(r):
    price, c = input().split()
    price, c = int(price), int(c)

    temp += price * c

if total == temp:
    print('Yes')
else:
    print('No')