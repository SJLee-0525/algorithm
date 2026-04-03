from sys import *

l = list(map(int, stdin.readline().split()))

x = 0
for ll in l:
    x += ll ** 2

print(x % 10)