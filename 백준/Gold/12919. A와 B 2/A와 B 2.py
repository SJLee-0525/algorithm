'''
S에서 T로 변환 가능한지 확인하니 시간초과뜸..
역으로 생각하자
'''
import sys
sys.setrecursionlimit(100001)

def bruteforce():
    global result

    if len(target) == len(S):
        if target == S:
            result = 1
        return

    if target[-1] == 'A':
        target.pop()
        bruteforce()
        target.append('A')
    if target[0] == 'B':
        target.reverse()
        target.pop()
        bruteforce()
        target.append('B')
        target.reverse()

###################################################################

S = list(sys.stdin.readline().rstrip())
T = list(sys.stdin.readline().rstrip())

target = T[:]
result = 0
bruteforce()

print(result)



########################### 기존 코드 ###########################

# import sys
# sys.setrecursionlimit(100001)
#
# from collections import deque
#
# def bruteforce(a_count, b_count, dir):
#     global result
#
#     if len(target) == len(T):
#         if dir == 1:
#             for i in range(len(T)):
#                 if target[i] != T[i]:
#                     return
#
#         else:
#             for i in range(len(T)):
#                 if target[len(T) - i - 1] != T[i]:
#                     return
#
#         result = 1
#         return
#
#     if a_count < T_A_count:
#         if dir == 1:
#             target.append('A')
#             bruteforce(a_count + 1, b_count, 1)
#             target.pop()
#         elif dir == -1:
#             target.appendleft('A')
#             bruteforce(a_count + 1, b_count, -1)
#             target.popleft()
#
#     if b_count < T_B_count:
#         if dir == 1:
#             target.append('B')
#             bruteforce(a_count, b_count + 1, -1)
#             target.pop()
#         elif dir == -1:
#             target.appendleft('B')
#             bruteforce(a_count, b_count + 1, 1)
#             target.popleft()
#
# ###########################################################
#
# S = list(sys.stdin.readline().rstrip())
# T = list(sys.stdin.readline().rstrip())
#
# S_A_count = S.count('A')
# T_A_count = T.count('A')
#
# S_B_count = S.count('B')
# T_B_count = T.count('B')
#
# target = deque(S)
# result = 0
#
# bruteforce(S_A_count, S_B_count, 1)
#
# print(result)