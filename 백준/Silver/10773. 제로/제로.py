import sys

k = int(sys.stdin.readline().strip())

c_list = []

for i in range(k):
    n = int(sys.stdin.readline().strip())
    if n == 0:
        c_list.pop()
    else: 
        c_list.append(n)

print(sum(c_list))
