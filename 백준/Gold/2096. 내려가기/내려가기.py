import sys

N = int(sys.stdin.readline())

arr = list(map(int, sys.stdin.readline().split()))

maxWindow = [[0] * 3 for _ in range(2)]
minWindow = [[1000000001] * 3 for _ in range(2)]

for i in range(3):
    maxWindow[0][i] = arr[i]
    minWindow[0][i] = arr[i]

for _ in range(N - 1):
    arr = list(map(int, sys.stdin.readline().split()))
    for std in range(3):
        for check in range(-1, 2):
            temp = std + check
            if 0 <= temp < 3:
                maxWindow[1][std] = max(maxWindow[1][std], arr[std] + maxWindow[0][temp])
                minWindow[1][std] = min(minWindow[1][std], arr[std] + minWindow[0][temp])

    for i in range(3):
        maxWindow[0][i] = maxWindow[1][i]
        maxWindow[1][i] = 0
        minWindow[0][i] = minWindow[1][i]
        minWindow[1][i] = 1000000001

print(max(maxWindow[0]), min(minWindow[0]))

