s = list(input())
a = tuple(s)
s.reverse()
s = tuple(s)

if a == s:
    print(1)
else:
    print(0)