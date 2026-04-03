import sys, heapq

N, K = map(int, sys.stdin.readline().split())

gems = []
for _ in range(N):
    w, v = map(int, sys.stdin.readline().split())
    heapq.heappush(gems, (w, v))

bags = []
for _ in range(K):
    bags.append(int(sys.stdin.readline()))

bags.sort()

result = 0
temp = []
for bag in bags:
    while gems and gems[0][0] <= bag:
        gem = heapq.heappop(gems)
        heapq.heappush(temp, -gem[1])

    if temp:
        target = heapq.heappop(temp)
        result -= target

    elif not gems: ## 이거 안 써서 틀린듯
        break

print(result)