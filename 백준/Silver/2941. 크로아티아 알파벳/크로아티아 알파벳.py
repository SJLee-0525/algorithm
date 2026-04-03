c_a = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

s = input()
c = 0


for i in c_a:
    s = s.replace(i, '1')

print(len(s))