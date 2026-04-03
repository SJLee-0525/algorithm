a, b = map(str, input().split())

a, b = list(a), list(b)
a.reverse(), b.reverse()

a, b = ''.join(a), ''.join(b)
a, b = int(a), int(b)

vs_list = [a, b]

print(max(vs_list))
