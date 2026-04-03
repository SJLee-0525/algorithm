from sys import *

l = []

n = int(stdin.readline())

for i in range(n):
    age, name = stdin.readline().split()
    age = int(age)
    l.append((age, name))

l.sort(key=lambda x : x[0])

for i in l:
    print(i[0], i[1])