import sys, heapq

N, M = map(int, sys.stdin.readline().split())

adjP = [[] for _ in range(N + 1)]   # 연관된 문제 경로 리스트
needP = [0] * (N + 1)               # 진입에 필요한 문제 수
for _ in range(M):
    p1, p2 = map(int, sys.stdin.readline().split())
    adjP[p1].append(p2)
    needP[p2] += 1

heap = []
for p in range(1, N + 1):
    if not needP[p]:    # 만약 사전에 풀 문제가 없다면 힙에 삽입
        heapq.heappush(heap, p)

result = []
while heap:
    nowP = heapq.heappop(heap)  # 힙에서 뽑아서 결과에 담음
    result.append(nowP)         
    for nextP in adjP[nowP]:    # 뽑아온 문제에서 다음으로 갈 수 있는 문제가 있다면
        needP[nextP] -= 1       # 다음 문제 진입 차수 감소
        if needP[nextP] == 0:   # 진입 차수가 0이 되면 힙에 삽입
            heapq.heappush(heap, nextP)

print(*result)