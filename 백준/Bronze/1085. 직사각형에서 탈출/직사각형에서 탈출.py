x, y, w, h = map(int, input().split())

w1 = w - x
h1 = h - y

if w1 <= x:
    a = w1
else:
    a = x

if h1 <= y:
    b = h1
else: 
    b = y

if a > b:
    print(b)
elif a <= b:
    print(a)

