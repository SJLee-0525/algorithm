import sys

def find(x):
    if parents[x] == x:
        return x

    parents[x] = find(parents[x])
    return parents[x]

def union(x, y):
    root_x = find(x)
    root_y = find(y)
    if root_x == root_y:
        return

    if root_x < root_y:
        parents[root_y] = parents[root_x]
    else:
        parents[root_x] = parents[root_y]

###############################################################

N, M = map(int, sys.stdin.readline().split()) # 사람 수, 파티 수

parents = list(range(N + 1))

# 진실을 아는 사람의 수, 멤버
knowCnt, *knowMember = map(int, sys.stdin.readline().split())
for know in knowMember:
    parents[know] = 0 # 진실을 아는 사람의 부모 노드는 0으로 통일

check = [] # 이따가 파티를 다시 한 번 순회해야 하니까 저장해 둘 리스트 생성
for partyNum in range(M):
    partyCnt, *partyMember = map(int, sys.stdin.readline().split())
    if partyCnt >= 2: # 만약 파티 인원 수가 2명 이상이라면
        for i in range(partyCnt - 1): # 해당 파티 모든 구성원들끼리 union find 진행
            for j in range(i + 1, partyCnt):
                union(partyMember[i], partyMember[j])
    check.append(partyMember) # 파티 저장

cnt = 0
for party in check:                     # 파티를 순회
    for member in party:                # 파티 멤버를 순회
        if find(parents[member]) == 0:  # 만약 부모가 0이면 (진실을 알면) 중지
            break
    else: # 문제 없이 통과하면 카운트
        cnt += 1

print(cnt)