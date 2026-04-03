h, m = input().split()
t = input()
h, m, t = int(h), int(m), int(t)

m += t

if m >= 60:
    h = h + m // 60
    m = m % 60
    if h >= 24:
        print(h - 24, m)
    else:
        print(h, m)

else:
    print(h, m)