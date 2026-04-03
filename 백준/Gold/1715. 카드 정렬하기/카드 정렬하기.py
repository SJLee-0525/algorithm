import sys, heapq

N = int(sys.stdin.readline())
priorityQueue = []

for n in range(N):
    heapq.heappush(priorityQueue, int(sys.stdin.readline()))

result = 0
while len(priorityQueue) >= 2:
    temp = heapq.heappop(priorityQueue)
    temp += heapq.heappop(priorityQueue)
    result += temp
    heapq.heappush(priorityQueue, temp)

print(result)


