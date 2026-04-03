a, b, c = map(int, input().split())

l = [a, b, c]
l.sort(reverse=True)

if l[0] < l[1] + l[2]:
    print(sum(l))

elif l[0] >= l[1] + l[2]:
    print((l[1] + l[2] -1) + l[1] + l[2])