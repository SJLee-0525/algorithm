from sys import *
from math import *

n = int(input())
l = []
for _ in range(n):
    l.append(int(stdin.readline()))

l.reverse()

for i in range(n):
    l[i] = l[i] - l[-1]

g = gcd(*l)

gcd_c = l[0] // g

print(gcd_c - len(l) + 1)
