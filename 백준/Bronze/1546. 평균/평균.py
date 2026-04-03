n = int(input())
new_score_list = []

score_list = list(map(int, input().split()))

score_list.sort()
max = score_list[n - 1]

for i in range(n):
    temp = score_list[i]
    temp = temp / max * 100
    new_score_list.append(temp)
    new_sum = sum(new_score_list)

print(float(new_sum / n))