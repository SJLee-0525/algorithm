from sys import *

def binary_search(target, data):
    start = 0
    end = len(data) - 1

    while start <= end:
        mid = (start + end) // 2
        if data[mid] == target:
            return 1
        elif data[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return 0

n = int(stdin.readline())
n_list = list(map(int, stdin.readline().split()))
m = int(stdin.readline())
m_list = list(map(int, stdin.readline().split()))
n_list.sort()

for i in m_list:
    print(binary_search(i, n_list))
