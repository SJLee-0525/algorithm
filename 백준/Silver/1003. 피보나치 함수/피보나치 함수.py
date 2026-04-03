import sys

T = int(sys.stdin.readline())

for _ in range(T):
    N = int(sys.stdin.readline())
    if N >= 2:
        arr = [0] * (N)
        arr[0] = 1
        arr[1] = 1

        # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]
        for i in range(2, N):
            arr[i] = arr[i - 1] + arr[i - 2]
            
        print(arr[-2], arr[-1])
    else:
        if N == 1:
            print(0, 1)
        elif N == 0:
            print(1, 0)