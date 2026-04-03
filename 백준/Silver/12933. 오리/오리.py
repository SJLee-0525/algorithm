import sys

inputSound = list(sys.stdin.readline().rstrip())
resultSound = [-1] * len(inputSound)

duckSound = ['q', 'u', 'a', 'c', 'k']

temp = [0] * (len(inputSound) // 5)

for s in range(len(inputSound)):
    for t in range(len(temp)):
        if inputSound[s] == duckSound[temp[t]]:
            resultSound[s] = t
            temp[t] = (temp[t] + 1) % 5
            break

if sum(temp) == 0 and -1 not in resultSound:
    print(max(resultSound) + 1)
else:
    print(-1)