import sys

n, m = map(int, sys.stdin.readline().split())

tree_list = list(map(int, sys.stdin.readline().split()))
tree_list.sort()

left, right = 1, tree_list[-1]
while left <= right:
    mid = (left + right) // 2
    harvest_tree = 0
    for tree in tree_list:
        temp_harvest = tree - mid
        if temp_harvest < 0:
            temp_harvest = 0
        harvest_tree += temp_harvest
    if harvest_tree < m:
        right = mid - 1
    elif harvest_tree >= m:
        left = mid + 1

print(right)