def DFS(adjL, quantity):
    infection = [0] * (quantity + 1)
    stack = []
    now = 1 # 1부터 시작함
    infection[now] = 1 
    while 1:
        for w in adjL[now]: 
            if infection[w] == 0:
                stack.append(now)
                now = w
                infection[now] = 1
                break
        else:
            if stack:
                now = stack.pop()
            else:
                # print(infection) # [0, 1, 1, 1, 0, 1, 1, 0]
                if infection.count(1) == 0:
                    return 0
                else:
                    return (infection.count(1) - 1)

import sys

quantity = int(sys.stdin.readline()) # 컴퓨터 수
connect = int(sys.stdin.readline()) # 간선의 수

adjL = [[] for _ in range(quantity + 1)] # 컴퓨터 수 + 1 만큼

for _ in range(connect):
    c1, c2 = map(int, sys.stdin.readline().split())
    adjL[c1].append(c2)
    adjL[c2].append(c1)
    # 양방향 노드이므로 

# print(adjL) # [[], [2, 5], [1, 3, 5], [2], [7], [1, 2, 6], [5], [4]]
print(DFS(adjL, quantity))

'''
10
7
1 2
2 3
3 4 
5 6
7 8
8 9
9 1

# 6
'''
'''
10
0
# 0
'''
'''
1
0
# 0
'''