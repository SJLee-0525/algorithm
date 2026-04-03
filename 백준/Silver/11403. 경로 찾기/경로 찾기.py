import sys

def dfs(s, N):
    stack = []
    visited = [0] * N
    # visited[s] = 1 <<<  i번째 줄의 i번째 숫자는 항상 0이다. -> 시작할 때 시작지점은 visited 표시 X

    while 1:
        for w in adj_L[s]:
            if visited[w] == 0:
                stack.append(s)
                s = w
                visited[s] = 1
                break
        else:
            if stack:
                s = stack.pop()
            else:
                # 종료될 때 결과 값 리스트에 visited 추가
                visited_list.append(visited)
                return


N = int(sys.stdin.readline()) # 정점의 개수

# 인접 리스트 생성
adj_L = [[] for _ in range(N)] # [[3], [6], [], [4, 5], [0], [6], [2]]
for a in range(N):
    adj = list(map(int, sys.stdin.readline().split()))
    for node in range(N):
        if adj[node]:
            adj_L[a].append(node)

# 결과 값 담을 리스트
visited_list = []

# 각 노드별로 dfs 순회
for s in range(N):
    dfs(s, N)

for result in visited_list:
    print(*result)