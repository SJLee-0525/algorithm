import sys

def VLR(node): # 전위 순회
    if node == 0: # 없으면 리턴
        return
    print(node, end= '')
    VLR(D[node][0])
    VLR(D[node][1])

def LVR(node): # 중위 순회
    if node == 0:
        return
    LVR(D[node][0])
    print(node, end= '')
    LVR(D[node][1])

def LRV(node): # 후위 순회
    if node == 0:
        return
    LRV(D[node][0])
    LRV(D[node][1])
    print(node, end='')

N = int(sys.stdin.readline())
D = {}

for _ in range(N):
    node, *adj_N = sys.stdin.readline().split()
    D[node] = [] # 인접 정보 담는 딕셔너리 생성
    for i in range(2):
        if adj_N[i] != '.':     # . 이 아니면 문자열 그대로 넣고
            D[node].append(adj_N[i])
        else:
            D[node].append(0)   # 나중에 T/F 판단 위해 .은 0으로 바꿔 넣음

VLR('A')
print()
LVR('A')
print()
LRV('A')
print()
