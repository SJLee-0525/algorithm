n, k = map(int, input().split())

l = list(range(1, n + 1))

result = []
while 1:
    for i in range(k):
        if i + 1 == k:
            result.append(l.pop(0))
        else:
            l.append(l.pop(0))
        if len(result) == n:
            break
    if len(result) == n:
        break

print('<', end ='')
for r in result[0:-1]:
    print(r, end =', ')
print(f'{result[-1]}>')