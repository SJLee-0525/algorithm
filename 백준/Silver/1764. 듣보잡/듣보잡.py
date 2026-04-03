from sys import *

n, m = map(int, stdin.readline().split())

no_listen = []
for _ in range(n):
    no_listen.append(stdin.readline().strip())

no_look = []
for __ in range(m):
    no_look.append(stdin.readline().strip())

no_listen = set(no_listen)
no_look = set(no_look)

result = list(no_listen.intersection(no_look))

print(len(result))
result.sort()
for r in result:
    print(r)