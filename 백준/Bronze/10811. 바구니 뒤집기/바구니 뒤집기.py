n, m = map(int, input().split())

n_list = list(range(1, n + 1))

for _ in range(m):
    i, j = map(int, input().split())
    n_list[i-1: j] = n_list[i-1:j][::-1]

print(*n_list)