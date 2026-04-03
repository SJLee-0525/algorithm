import sys
from collections import deque

def find_brother(me, brother):
    global cnt
    global min_distance

    visited = [0] * 100001
    visited[me] = 1
    queue = deque([me])

    while queue:
        me = queue.popleft()
        if me == brother:           # 만약 동생 위치인데
            if min_distance == 0:   # 처음 도착한 거면 최소 거리 할당 후 카운트 증가
                min_distance = visited[me] - 1
                cnt += 1
            # 만약 처음 도착한 것이 아니면, 최소 거리랑 현재 거리랑 같은지 확인 후 같으면 카운트 증가
            elif min_distance != 0 and min_distance == visited[me] - 1:
                cnt += 1

        if me * 2 <= 100000:    # 순간이동해도 범위를 벗어나지 않는다면
            # 방문한 적이 없거나, 만약 방문했더라도 이번에 방문한 게 더 최단 거리거나 같다면
            if not visited[me * 2] or visited[me * 2] > visited[me]:
                visited[me * 2] = visited[me] + 1
                queue.append(me * 2)

        if me + 1 <= 100000:    # 오른쪽으로 이동하더라도 범위를 벗어나지 않는다면
            # 방문한 적이 없거나, 만약 방문했더라도 이번에 방문한 게 더 최단 거리거나 같다면
            if not visited[me + 1] or visited[me + 1] > visited[me]:
                visited[me + 1] = visited[me] + 1
                queue.append(me + 1)

        if me - 1 >= 0:         # 왼쪽으로 이동해도 범위를 벗어나지 않는다면
            # 방문한 적이 없거나, 만약 방문했더라도 이번에 방문한 게 더 최단 거리거나 같다면
            if not visited[me - 1] or visited[me - 1] > visited[me]:
                visited[me - 1] = visited[me] + 1
                queue.append(me - 1)

###################################################################

N, K = map(int, sys.stdin.readline().split())

min_distance = 0
cnt = 0

find_brother(N, K)

print(min_distance)
print(cnt)