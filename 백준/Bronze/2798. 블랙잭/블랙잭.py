from sys import *

n, m = map(int, stdin.readline().split())
l = list(map(int, stdin.readline().split()))
l2 = []

for i in range(0, n - 2):
    for j in range(1, n - 1):
        if i == j:
            continue
        for k in range(2, n):
            if i == j or j == k or i == k:
                continue
            sum = l[i] + l[j] + l[k]
            if sum <= m:
                l2.append(sum)
           
         
print(max(l2))