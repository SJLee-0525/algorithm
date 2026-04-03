l = list(map(int, input()))
l.sort(reverse=True)

for i in range(len(l)):
    print(l[i], end = '')