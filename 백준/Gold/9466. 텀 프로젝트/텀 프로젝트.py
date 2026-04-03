import sys
sys.setrecursionlimit(1000001)

def dfs(now):
    global cnt

    check[now] = 1          # 나부터 check
    cycle.append(now)       # 사이클 후보에 추가
    next = chooseInfo[now]  # 다음 사람 지목

    if check[next]:         # 지목된 사람이 이미 방문됐을 경우
        if next in cycle:   # 그 사람이 사이클 후보에 있다면
            # 그 사람의 인덱스를 찾아서 그 이후에 들어온 사람들의 수를 셈
            # -> 그 사람 이후에 들어온 사람들이 한 팀이 되기 때문
            cnt += len(cycle[cycle.index(next):]) 
        return
    else:   # 아니라면 지목 받은 사람을 인자로 재귀 호출
        dfs(next)

######################################################################

T = int(sys.stdin.readline())
for tc in range(T):
    N = int(sys.stdin.readline())
    chooseInfo = [0] + list(map(int, sys.stdin.readline().split()))

    cnt = 0
    check = [0] * (N + 1)
    for person in range(1, N + 1):
        if not check[person]: # 탐색된 적 없는 경우에만 dfs 호출
            cycle = []        # 호출할 때마다 새 사이클 리스트 생성
            dfs(person)

    print(N - cnt) # 지목받지 않은 사람들의 수 출력

######################### 기존 코드 #########################
# 시간 복잡도 상으로는 크게 문제 없어보이는데 ..

# import sys
#
# def dfs(start):
#     stack = []
#
#     visited = [0] * (N + 1)
#     now = start
#
#     while 1:
#         next = chooseInfo[now]
#         if not visited[next]:
#             visited[next] = 1
#             now = next
#             stack.append(now)
#             if now == start:
#                 for person in stack:
#                     check[person] = 1
#                 return 1
#         else:
#             return 0
#
# ######################################################################
#
# T = int(sys.stdin.readline())
# for tc in range(T):
#     N = int(sys.stdin.readline())
#     chooseInfo = [0] + list(map(int, sys.stdin.readline().split()))
#
#     cnt = 0
#     check = [0] * (N + 1)
#     for person in range(1, N + 1):
#         if not check[person]:
#             dfs(person)
#
#     print(N - sum(check))