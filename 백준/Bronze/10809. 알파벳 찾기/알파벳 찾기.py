s = input()
a = 97
out_list= []

for i in range(26):
    out = s.find(chr(a))
    out_list.append(out)
    a += 1

print(*out_list)
