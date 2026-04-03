import sys, heapq

tc = 0

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

INF = float('inf')

def dijkstra(tc, n):
    visited = [[INF] * n for _ in range(n)]
    visited[0][0] = cave[0][0]

    # 힙큐는 맨 앞의 데이터로 정렬되니까, 루피를 맨 앞에
    priorityQueue = [(visited[0][0], 0, 0)]

    while priorityQueue:
        curr, ci, cj = heapq.heappop(priorityQueue)
        if visited[ci][cj] > curr:
            continue        # 현재 위치가 이미 처리 됐다면 (금액이 더 낮다면) 스킵

        for k in range(4):  # 델타 순회
            mi, mj = ci + di[k], cj + dj[k]
            # 범위를 벗어나지 않고, 다음 위치를 가는데 잃는 돈이 더 적다면 이동
            if 0 <= mi < n and 0 <= mj < n and visited[mi][mj] > curr + cave[mi][mj]:
                visited[mi][mj] = curr + cave[mi][mj]   # 잃는 돈 계산 후 힙큐에 푸시
                heapq.heappush(priorityQueue, (visited[mi][mj], mi, mj))

    print(f'Problem {tc}: {visited[n - 1][n - 1]}')

########################################################################################


while 1:
    N = int(sys.stdin.readline())
    if not N:
        break

    cave = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

    tc += 1
    dijkstra(tc, N)