n = int(input())

l = []
for _ in range(n):
    l.append(tuple(map(int, input().split())))

l2 = []
for p in range(n):
    pc = 1
    for a in range(n):
        if l[p][0] < l[a][0] and l[p][1] < l[a][1]:
            pc += 1
    l2.append(pc)

print(* l2)
