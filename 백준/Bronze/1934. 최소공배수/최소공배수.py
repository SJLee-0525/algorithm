from sys import *

n = int(input())

for i in range(n):
    a, b = map(int, stdin.readline().split())
    aa, bb = a, b

    while a % b != 0:
        a, b = b, a % b
 
    print(aa * bb // b)