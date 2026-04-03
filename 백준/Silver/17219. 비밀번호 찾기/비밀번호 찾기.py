from sys import *

n, m = map(int, stdin.readline().split())

site_d = {}
for _ in range(n):
    temp = stdin.readline().split()
    site_d[temp[0]] = temp[1]

for __ in range(m):
    web = stdin.readline()[:-1]
    print(site_d[web])
