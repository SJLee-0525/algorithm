import sys
sys.setrecursionlimit(100001)

def find(x):
    if parents[x] == x:
        return x
    parents[x] = find(parents[x])
    return parents[x]

###############################################################

G = int(sys.stdin.readline()) # 게이트 수
P = int(sys.stdin.readline()) # 비행기 수

parents = list(range(G + 1))

seq = 0 # 카운트
for _ in range(P):
    desiredGate = int(sys.stdin.readline()) # 도킹을 원하는 최대 게이트 번호
    gate = find(desiredGate) # 원하는 게이트부터 최대한 가까운 빈 게이트를 찾음
    if gate == 0:   # 만약 gate가 0이면 도킹 가능한 게이트가 없음
        break

    # 도킹이 가능하다면, 현재 게이트가 차지된 것을 표시함과 동시에, 다음 비행기를 위해 하나 아래 게이트를 해당 게이트의 부모로 지정
    parents[gate] = gate - 1
    seq += 1
    # print(parents)

print(seq)   # 해당 비행기 순서 출력
