import sys, heapq

def dijkstra(start, end):
    weights[start] = 0

    priorityQueue = []
    heapq.heappush(priorityQueue, (-1000000001, start, 0)) # 최대힙

    while priorityQueue:
        currWeight, now, parent = heapq.heappop(priorityQueue) # 현재 위치까지 들고올 수 있는 무게, 현재 좌표 pop
        currWeight *= -1
        if weights[now] > currWeight:
            continue

        for nextInfo in adjL[now]:
            nextIL, nextWeight = nextInfo # 다음 위치를 가는데 버틸 수 있는 무게, 다음 좌표
            if nextIL == parent: # 만약 갔다 되돌아 오는 경우(부모 - 자식 - 부모 경로)면 건너뜀
                continue

            tempWeight = min(currWeight, nextWeight) # 다음 위치에 들고 갈 수 있는 무게에 현재와 다음 둘 중 작은 값을 할당(무게 제한)
            if weights[nextIL] < tempWeight: # 만약 해당 위치에 있는 값보다 크다면
                weights[nextIL] = tempWeight # 할당
                heapq.heappush(priorityQueue, (-tempWeight, nextIL, now)) # 최대힙 푸시

    # print(weights)
    print(weights[end])

#######################################################################

N, M = map(int, sys.stdin.readline().split()) # N개의 섬, M개의 다리

adjL = [[] for _ in range(N + 1)]
weights = [0] * (N + 1)
for _ in range(M):
    a, b, w = map(int, sys.stdin.readline().split()) # a, b 사이에 w 중량인 다리 존재
    adjL[a].append((b, w)) # 다리는 양방향
    adjL[b].append((a, w))

start, end = map(int, sys.stdin.readline().split())

dijkstra(start, end)
