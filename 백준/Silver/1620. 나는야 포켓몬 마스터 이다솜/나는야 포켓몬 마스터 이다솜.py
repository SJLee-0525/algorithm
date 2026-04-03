import sys

N, M = map(int, sys.stdin.readline().split())

mon_list = [sys.stdin.readline().strip() for _ in range(N)]
num_list = list(range(1, N + 1))

mon_dict = {mon_list[i]:num_list[i] for i in range(N)}
rev_mon_dict = {value:key for key, value in mon_dict.items()}

# print(mon_dict)
# print(rev_mon_dict)

for _ in range(M):
    target = sys.stdin.readline().strip()

    if target.isdecimal() == True:
        target = int(target)
        print(rev_mon_dict[target])
    else:
        print(mon_dict[target])