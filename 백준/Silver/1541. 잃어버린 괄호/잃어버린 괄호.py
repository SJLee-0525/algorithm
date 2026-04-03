import sys

'''
55-50+40-50+40-50-50
'''

arr = sys.stdin.readline().rstrip()
numbers = list(arr.split('-'))
# print("numbers", numbers) # numbers ['55', '50+40', '50+40', '50', '50']

result = sum(list(map(int, numbers[0].split('+'))))

if len(numbers) >= 2:
    for nums in numbers[1:]:
        temp = sum(list(map(int, nums.split('+'))))
        result -= temp

print(result)