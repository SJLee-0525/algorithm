import sys, heapq

N = int(sys.stdin.readline())

studies = [tuple(map(int, sys.stdin.readline().split())) for _ in range(N)]
studies.sort()

heap = []
for start, end in studies:
    # 현재 강의의 시작 시간이, 힙의 최소 값보다 같거나 크다면
    if heap and heap[0] <= start:
        heapq.heappop(heap) # 이전 강의를 끝냄 (힙에서 제거)
    # 현재 강의의 종료 시간을 추가
    heapq.heappush(heap, end)

# 힙에 남아있는 종료시간의 길이가, 강의실의 개수가 됨
print(len(heap))
