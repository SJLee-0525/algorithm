l = []

for i in range(5):
    l.append(int(input()))

l.sort()
average = sum(l) / len(l)

print(int(average))
print(l[2])