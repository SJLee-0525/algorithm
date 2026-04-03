import sys

N = int(sys.stdin.readline())

for _ in range(N):
    A_len, *A = map(int, sys.stdin.readline().split()) # 1 [4]
    B_len, *B = map(int, sys.stdin.readline().split()) # 4 [3, 3, 2, 1]

    A_count = [0] * 5
    B_count = [0] * 5

    for ai in range(A_len): # [0, 0, 0, 0, 1]
        A_count[A[ai]] += 1 
    
    for bi in range(B_len): # [0, 1, 1, 2, 0]
        B_count[B[bi]] += 1
    
    A_count.reverse() # [1, 0, 0, 0, 0]
    B_count.reverse() # [0, 2, 1, 1, 0]

    for i in range(5):
        if A_count[i] > B_count[i]: # A가 동일 인덱스에서 더 많으면 
            print('A')
            break
        elif A_count[i] < B_count[i]: # B가 동일 인덱스에서 더 많으면 
            print('B')
            break
        else: # 둘이 값이 같다면
            if i < 4:
                continue # 다음으로 넘김
            elif i == 4: # 끝까지 왔다면 무승부
                print('D')
                break

