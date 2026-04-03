import sys
from collections import deque

def a_to_b(a, b):
    Q = deque()
    Q.append((a, 1))
    checked.add(a)

    while Q:
        tar, cnt = Q.popleft()
        # print(tar, checked[tar])

        if tar == b:
            return cnt

        double_tar = tar * 2
        if double_tar <= b and double_tar not in checked:
            Q.append((double_tar, cnt + 1))
            checked.add(double_tar)

        plus_tar = int(str(tar) + '1')
        if plus_tar <= b and plus_tar not in checked:
            Q.append((plus_tar, cnt + 1))
            checked.add(plus_tar)

    return -1

################################################################################

A, B = map(int, sys.stdin.readline().split())
checked = set()
print(a_to_b(A, B))

