import sys

n = int(sys.stdin.readline().strip())
budget_list = list(map(int, sys.stdin.readline().split()))
total_budget = int(sys.stdin.readline().strip())

budget_list.sort()

start, end = 0, budget_list[-1]

while start <= end:
    mid = (start + end) // 2
    temp_total_budget = 0
    for budget in budget_list:
        temp = budget - mid
        if temp < 0:
            temp = budget
        else:
            temp = mid
        temp_total_budget += temp
    # print(temp_total_budget)
    if temp_total_budget <= total_budget:
        start = mid + 1
    else:
        # print(start, mid, end)
        end = mid - 1
    # print(start, mid, end)

print(end)