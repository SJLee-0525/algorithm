import sys

switch_count = int(sys.stdin.readline().strip())
switch_arr = list(map(int, sys.stdin.readline().strip().split()))

n = int(sys.stdin.readline().strip())

for _ in range(n):
    sex, num = map(int, sys.stdin.readline().strip().split())
    if sex == 1:
        for i in range(switch_count):
            if (i + 1) % num == 0:
                if switch_arr[i] == 1:
                    switch_arr[i] = 0
                else:
                    switch_arr[i] = 1
    
    elif sex == 2:
        index = num - 1
        j = 1
        while 0 <= index - j and index + j < switch_count and switch_arr[index - j] == switch_arr[index + j]:
            j += 1
        for k in range(index - j + 1, index + j):
            if switch_arr[k] == 1:
                switch_arr[k] = 0
            else:
                switch_arr[k] = 1
    
if len(switch_arr) <= 20:
    for switch in switch_arr:
        print(switch, end=' ')
else:
    x = 0
    while x < switch_count:
        print(switch_arr[x], end=' ')
        x += 1
        if x % 20 == 0:
            print()
