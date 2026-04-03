def gcd(a, b):
    aa, bb = a, b
    while b != 0:
        a, b = b, a % b
    return aa * bb // a
    
def lcm(a, b):
    return a * b // gcd(a, b)

a1, b1 = map(int, input().split())
a2, b2 = map(int, input().split())

b3 = gcd(b1, b2)

n1, n2 = b3 // b1, b3 // b2
a3 = a1 * n1 + a2 * n2

if lcm(a3, b3) == 1:
    print(a3, b3)

else:
    temp = lcm(a3, b3)
    print(a3 // temp, b3 // temp)
