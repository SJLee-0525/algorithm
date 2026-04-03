import sys

strA = sys.stdin.readline().rstrip()
strB = sys.stdin.readline().rstrip()

LCS = [[0] * len(strA) for _ in range(len(strB))]

for i in range(len(strB)):
    for j in range(len(strA)):
        a, b, c, d = 0, 0, 0, 0
        if i - 1 >= 0:
            b = LCS[i - 1][j]
        if j - 1 >= 0:
            c = LCS[i][j - 1]
        if i - 1 >= 0 and j - 1 >= 0:
            d = LCS[i - 1][j - 1]

        if strA[j] != strB[i]:
            LCS[i][j] = max(a, b, c)
        else:
            LCS[i][j] = d + 1

print(LCS[-1][-1])
