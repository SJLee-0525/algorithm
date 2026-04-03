import sys
import heapq

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def dijkstra(si, sj):
    '''최소 힙을 사용한 다익스트라'''
    priorityQueue = []
    heapq.heappush(priorityQueue, (0, si, sj)) # 시작점의 파괴 횟수는 0

    visited[si][sj] = 1 # 방문 처리
    destroy[si][sj] = 0 # 시작점 파괴 횟수 0

    while priorityQueue:
        destroyCnt, i, j = heapq.heappop(priorityQueue) # 최소 힙을 이용해 파괴 횟수가 가장 적은 좌표 가져옴
        if destroy[i][j] < destroyCnt:  # 만약 현재 위치에 할당된 파괴 횟수보다 뽑아온 파괴 횟수가 많다면 건너뜀
            continue

        # 델타 순회
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < M and not visited[mi][mj]: # 범위를 벗어나지 않고, 방문한 적이 없는데,
                if arr[mi][mj] and destroy[mi][mj] > destroyCnt + 1:
                    # 해당 위치가 벽이고, 뽑아온 파괴 횟수를 1 증가해도 현재 할당된 파괴 횟수보다 적다면
                    arr[mi][mj] = 0                                         # 벽을 부수고
                    visited[mi][mj] = 1                                     # 빙문 처리
                    destroy[mi][mj] = destroyCnt + 1                        # 벽 부순 횟수 1 추가해서 할당
                    heapq.heappush(priorityQueue, (destroyCnt + 1, mi, mj)) # 힙에 데이터 저장
                elif not arr[mi][mj] and destroy[mi][mj] > destroyCnt:
                    # 만약 해당 위치가 빈 방이고, 뽑아온 파괴 횟수가 현재 할당된 파괴 횟수보다 적다면
                    visited[mi][mj] = 1                                 # 방문 처리
                    destroy[mi][mj] = destroyCnt                        # 벽 부순 횟수 할당
                    heapq.heappush(priorityQueue, (destroyCnt, mi, mj)) # 데이터 저장

    return destroy[N - 1][M - 1] # 최종 결과 반환

##########################################################################

M, N = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

visited = [[0] * M for _ in range(N)]       # 방문 여부 확인용
destroy = [[100001] * M for _ in range(N)]  # 해당 위치까지 가는 데 필요한 파괴 횟수 할당용

print(dijkstra(0, 0))
