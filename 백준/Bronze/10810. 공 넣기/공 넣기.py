n, m = map(int, input().split())

ball_list = [0 for i in range(n)]

for _ in range(m):
    i, j, k = map(int, input().split())
    for a in range(i, j + 1):
        ball_list[a - 1] = k
    
print(*ball_list)
