import sys

N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
target = int(sys.stdin.readline())

temp_arr = [0] * N

arr_dict = dict(zip(arr, temp_arr))

count = 0
for elem in arr:
    if elem > target - elem:
        if arr_dict.get(target - elem) != None:
            count += 1

print(count)
