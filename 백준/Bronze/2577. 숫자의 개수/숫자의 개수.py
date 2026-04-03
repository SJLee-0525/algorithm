from sys import *

a = int(stdin.readline())
b = int(stdin.readline())
c = int(stdin.readline())

x = a * b * c
x = list(str(x))

for i in range(10):
    i = str(i)
    print(x.count(i))