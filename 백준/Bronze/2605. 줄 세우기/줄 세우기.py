import sys

N = int(sys.stdin.readline())
students = list(range(1, N + 1))
bp = list(map(int, sys.stdin.readline().split()))

seq = []
for i in range(N):
    seq.insert(len(seq) - bp[i], students[i])

print(*seq)
    