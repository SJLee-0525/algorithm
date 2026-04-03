import sys
from collections import deque

def find_brother(me, brother):
    visited = [0] * 100001
    visited[me] = 1
    queue = deque([me])

    while queue:
        me = queue.popleft()
        if me == brother:       # 뽑았는데 동생 위치면 이동 거리 반환
            return visited[me] - 1

        if me * 2 <= 100000:    # 순간이동해도 범위를 벗어나지 않는다면
            # 방문한 적이 없거나, 만약 방문했더라도 이번에 방문한 게 더 최단 거리라면
            if not visited[me * 2] or visited[me * 2] > visited[me]:
                visited[me * 2] = visited[me]   # 방문 표시 (시간 경과 없음)
                queue.append(me * 2)           

        if me + 1 <= 100000:    # 오른쪽으로 이동하더라도 범위를 벗어나지 않는다면
            # 방문한 적이 없거나, 만약 방문했더라도 이번에 방문한 게 더 최단 거리라면
            if not visited[me + 1] or visited[me + 1] > visited[me]:
                visited[me + 1] = visited[me] + 1   # 방문 표시 (1초 추가)
                queue.append(me + 1)

        if me - 1 >= 0:         # 왼쪽으로 이동해도 범위를 벗어나지 않는다면
            # 방문한 적이 없거나, 만약 방문했더라도 이번에 방문한 게 더 최단 거리라면
            if not visited[me - 1] or visited[me - 1] > visited[me]:
                visited[me - 1] = visited[me] + 1   # 방문 표시 (1초 추가)
                queue.append(me - 1)

#######################################################################

N, K = map(int, sys.stdin.readline().split())
print(find_brother(N, K))
