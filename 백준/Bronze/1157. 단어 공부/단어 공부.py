s = input()
s = s.upper()
s = list(s)
s.sort()
d = {}

for i in s:
    if i in d:
        d[i] += 1
    else:
        d[i] = 1

max_a = [k for k, v in d.items() if max(d.values()) ==  v]


if len(max_a) == 1:
    print(*max_a)

elif len(max_a) >= 2:
    print('?')
