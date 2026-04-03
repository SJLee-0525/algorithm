from sys import *

n = int(stdin.readline())
n_list = list(map(int, stdin.readline().split()))

n_list.sort()

time = 0
for i in range(n):
    time += sum(n_list[0:i + 1])

print(time)