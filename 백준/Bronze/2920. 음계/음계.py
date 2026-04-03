from sys import *

l = list(map(int, stdin.readline().split()))
a_clone = l[::1]
a_clone.sort()
d_clone = l[::1]
d_clone.sort(reverse = True)

if l == a_clone:
    print('ascending')
elif l == d_clone:
    print('descending')
else:
    print('mixed')

