import sys


class Heap:
    def __init__(self):
        self.heap = []

    def heappush(self, value):
        self.heap.append(value)
        cur = len(self.heap) - 1
        while cur > 0:
            par = (cur - 1) // 2
            # 마감 시각이 빠른 것 우선, 같으면 소요 시간이 짧은 것 우선
            if self.heap[par][1] > self.heap[cur][1] or (
                    self.heap[par][1] == self.heap[cur][1] and self.heap[par][0] > self.heap[cur][0]):
                self.heap[par], self.heap[cur] = self.heap[cur], self.heap[par]
                cur = par
            else:
                break

    def heappop(self):
        if not self.heap:
            return -1
        if len(self.heap) == 1:
            return self.heap.pop()

        value = self.heap[0]
        self.heap[0] = self.heap.pop()
        cur = 0
        while True:
            left = cur * 2 + 1
            right = cur * 2 + 2
            smallest = cur

            if left < len(self.heap) and (self.heap[left][1] < self.heap[smallest][1] or (
                    self.heap[left][1] == self.heap[smallest][1] and self.heap[left][0] < self.heap[smallest][0])):
                smallest = left

            if right < len(self.heap) and (self.heap[right][1] < self.heap[smallest][1] or (
                    self.heap[right][1] == self.heap[smallest][1] and self.heap[right][0] < self.heap[smallest][0])):
                smallest = right

            if smallest != cur:
                self.heap[cur], self.heap[smallest] = self.heap[smallest], self.heap[cur]
                cur = smallest
            else:
                break

        return value


# 입력 처리
N = int(sys.stdin.readline())
heap = Heap()

for _ in range(N):
    t, d = map(int, sys.stdin.readline().split())
    heap.heappush((t, d))

M = int(sys.stdin.readline())
nextWorks = []

for _ in range(M):
    w, t, d = map(int, sys.stdin.readline().split())
    nextWorks.append((w, t, d))

nextWorks.sort()  # 작업 추가 시간 기준 정렬

curTime, nwIndex = 0, 0

while len(heap.heap) > 0 or nwIndex < M:
    # 새로운 작업 추가 시점이 다가오면 새 작업을 먼저 넣음
    while nwIndex < M and nextWorks[nwIndex][0] <= curTime:
        heap.heappush((nextWorks[nwIndex][1], nextWorks[nwIndex][2]))
        nwIndex += 1

    # 모든 작업이 들어올 때까지 대기해야 하는 경우
    if len(heap.heap) == 0 and nwIndex < M:
        curTime = nextWorks[nwIndex][0]
        continue

    if len(heap.heap) == 0:
        break  # 더 이상 할 작업이 없음

    t, d = heap.heappop()

    # 만약 새로운 작업이 중간에 들어오면 현재 작업을 나눠서 수행
    if nwIndex < M and curTime + t > nextWorks[nwIndex][0]:
        workDone = nextWorks[nwIndex][0] - curTime
        remainingTime = t - workDone
        curTime = nextWorks[nwIndex][0]
        heap.heappush((remainingTime, d))  # 남은 작업을 다시 추가
    else:
        # 마감 시간을 넘기면 실패
        if d < curTime + t:
            print("NO")
            sys.exit(0)
        curTime += t  # 작업 완료

print("YES")
print(curTime)