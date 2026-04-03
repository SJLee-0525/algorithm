'''
단방향 인접 리스트를 정방향, 역방향으로 만든 후 각각 탐색
각각 탐색한 개수가 나를 제외한 다른 사람들의 수와 같으면 정확한 내 위치를 알 수 있다고 가정
'''

import sys

def dfs(initPerson):
    stack = []
    checked = [0] * (N + 1)
    person = initPerson
    checked[person] = 1
    while 1:
        for adjPerson in adjPersons[person]:
            if not checked[adjPerson]:
                stack.append(person)
                person = adjPerson
                checked[person] = 1
                break
        else:
            if stack:
                person = stack.pop()
            else:
                break

    higherPersonCnt = sum(checked) - 1

    stack.clear()
    reverseChecked = [0] * (N + 1)
    person = initPerson
    reverseChecked[person] = 1
    while 1:
        for adjPerson in revAdjPersons[person]:
            if not reverseChecked[adjPerson]:
                stack.append(person)
                person = adjPerson
                reverseChecked[person] = 1
                break
        else:
            if stack:
                person = stack.pop()
            else:
                break

    lowerPersonCnt = sum(reverseChecked) - 1

    personCnt = higherPersonCnt + lowerPersonCnt
    # print(initPerson, personCnt, higherPersonCnt, lowerPersonCnt)
    if personCnt == N - 1:
        return True
    else:
        return False

############################################################

N, M = map(int, sys.stdin.readline().split())

adjPersons = [[] for _ in range(N + 1)]
revAdjPersons = [[] for _ in range(N + 1)]
for _ in range(M):
    p1, p2 = map(int, sys.stdin.readline().split())
    adjPersons[p1].append(p2)
    revAdjPersons[p2].append(p1)

# print(adjPersons)
# print(revAdjPersons)

cnt = 0
for person in range(1, N + 1):
    if dfs(person):
        cnt += 1

print(cnt)
