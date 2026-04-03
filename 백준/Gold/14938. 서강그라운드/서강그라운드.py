import sys
import heapq

def dijkstra(start):
    global result

    dist = [10000001] * (N + 1) # 초기 거리 설정
    dist[start] = 0  # 시작 지점의 거리는 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (0, start)) # 거리 지점

    while priorityQueue:
        curr_dist, curr_place = heapq.heappop(priorityQueue)
        if curr_dist > dist[curr_place]:
            continue  # 이미 처리된 지점은 건너뜀

        for next_info in adjL[curr_place]:
            next_place, next_dist = next_info
            new_dist = curr_dist + next_dist

            # 새로운 거리가 M 이하면서, 더 짧으면
            if new_dist <= M and new_dist < dist[next_place]:
                dist[next_place] = new_dist
                heapq.heappush(priorityQueue, (new_dist, next_place))

    # 도달 가능한 지역들의 아이템을 추가
    itemCnt = sum(itemList[i] for i in range(1, N + 1) if dist[i] <= M)
    
    result = max(result, itemCnt)

#################################################################################

N, M, R = map(int, sys.stdin.readline().split()) # 지역 개수, 수색 범위, 길의 개수
itemList = [0] + list(map(int, sys.stdin.readline().split()))

adjL = [[] for _ in range(N + 1)]
for _ in range(R):
    a, b, l = map(int, sys.stdin.readline().split())
    adjL[a].append((b, l))
    adjL[b].append((a, l))

result = 0

# 모든 시작 지점에서 다익스트라 탐색 수행
for start in range(1, N + 1):
    dijkstra(start)

print(result)