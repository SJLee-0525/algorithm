import sys

for _ in range(4):
    x1, y1, p1, q1, x2, y2, p2, q2 = map(int, sys.stdin.readline().split())

    ans = None

    if p1 < x2 or p2 < x1 or q1 < y2 or q2 < y1:
        # 직사각형이 전혀 만나지 않는 경우
        ans = 'd'
    elif (p1 == x2 and (q1 == y2 or y1 == q2)) or (x1 == p2 and (q1 == y2 or y1 == q2)):
        # 꼭지점만 만나는 경우
        ans = 'c'
    elif (p1 == x2 or x1 == p2) and (not (q1 < y2 or q2 < y1)) or (q1 == y2 or y1 == q2) and (not (p1 < x2 or p2 < x1)):
        # 변만 만나는 경우
        ans = 'b'
    else:
        # 면으로 만나는 경우
        ans = 'a'

    print(ans)

# for _ in range(4):
#     x1, y1, p1, q1, x2, y2, p2, q2 = map(int, sys.stdin.readline().split())
#     # square_1 = [(x1, q1), (p1, q1), (p1, y1), (x1, y1)] # 1 2
#     # square_2 = [(x2, q2), (p2, q2), (p2, y2), (x2, y2)] # 4 3

#     ans = None
#     # 만약 직사각형이 서로 맞닿는 면이 있다면
#     # if ((x2 <= x1 <= p2) and ((y2 <= y1 <= q2) or (y2 <= q1 <= q2))) or ((x2 <= p1 <= p2) and ((y2 <= y1 <= q2) or (y2 <= q1 <= q2))) or ((y2 <= y1 <= q2) and ((x2 <= x1 <= p2) or (x2 <= p1 <= p2))) or ((y2 <= q1 <= q2) and ((x2 <= x1 <= p2) or (x2 <= p1 <= p2))) or ((x1 <= x2 <= p1) and ((y1 <= y2 <= q1) or (y1 <= q2 <= q1))) or ((x1 <= p2 <= p1) and  ((y1 <= y2 <= q1) or (y1 <= q2 <= q1))) or ((y1 <= y2 <= q1) and ((x1 <= x2 <= p1) or (x1 <= p2 <= p1))) or ((y1 <= q2 <= q1) and ((x1 <= x2 <= p1) or (x1 <= p2 <= p1))):
#     #     if (p1 == x2 and y1 == q2) or (p1 == x2 and q1 == y2) or (x1 == p2 and y1 == q2) or (x1 == p2 and q1 == y2): # 꼭지점만 만나면
#     #         ans = 'c'
#     #     elif (y1 == q2 and (x1 <= x2 <= p1 or x1 <= p2 <= p1)) or (q1 == y2 and (x1 <= x2 <= p1 or x1 <= p2 <= p1)) or (p1 == x2 and (y1 <= y2 <= q1 or y1 <= q2 <= y2)) or (x1 == p2  and (y1 <= y2 <= q1 or y1 <= q2 <= y2)): #변만 만나면
#     #         ans = 'b'
#     #     else: # 나머지: 면이 만나면
#     #         ans = 'a'
#     # else: # 만약 겹치는 면이 없으면
#     #     ans = 'd'

#     # 만약 직사각형이 서로 맞닿는 면이 있다면
#     if (((y2 <= y1 <= q2) or (y2 <= q1 <= q2)) and (x2 <= x1 <= p2)) or (((y2 <= y1 <= q2) or (y2 <= q1 <= q2)) and (x2 <= p1 <= p2)) or (((x2 <= x1 <= p2) or (x2 <= p1 <= p2)) and (y2 <= y1 <= q2)) or (((x2 <= x1 <= p2) or (x2 <= p1 <= p2)) and (y2 <= q1 <= q2)) or (((y1 <= y2 <= q1) or (y1 <= q2 <= q1)) and (x1 <= x2 <= p1)) or (((y1 <= y2 <= q1) or (y1 <= q2 <= q1)) and (x1 <= p2 <= p1)) or (((x1 <= x2 <= p1) or (x1 <= p2 <= p1)) and (y1 <= y2 <= q1)) or (((x1 <= x2 <= p1) or (x1 <= p2 <= p1)) and (y1 <= q2 <= q1)):
#         if (p1 == x2 and (q1 == y2 or y1 == q2)) or (x1 == p2 and (q1 == y2 or y1 == q2)):
#             # 꼭지점만 만나는 경우
#             ans = 'c'
#         elif (p1 == x2 or x1 == p2) and (not (q1 < y2 or q2 < y1)) or (q1 == y2 or y1 == q2) and (not (p1 < x2 or p2 < x1)):
#             # 변만 만나는 경우+
#             ans = 'b'
#         else:
#             ans = 'a'
            
#     else: # 만약 겹치는 면이 없으면
#         ans = 'd'

#     print(ans)