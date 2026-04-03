import sys
import heapq

def dijkstra(start):
    priority_queue = []
    costs[start] = 0
    heapq.heappush(priority_queue, (0, start))

    while priority_queue:
        curr_cost, now_city = heapq.heappop(priority_queue)
        if curr_cost > costs[now_city]:
            continue
        for next_city_info in adjL[now_city]:
            next_city, required = next_city_info
            if costs[next_city] > curr_cost + required:
                new_cost = curr_cost + required
                costs[next_city] = new_cost
                prev_node[next_city] = now_city
                heapq.heappush(priority_queue, (new_cost, next_city))

#######################################################################

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

adjL = [[] for _ in range(N + 1)]
costs = [1000000001] * (N + 1)
prev_node = [0] * (N + 1)

for _ in range(M):
    s, e, c = map(int, sys.stdin.readline().split())
    adjL[s].append((e, c))

A, B = map(int, sys.stdin.readline().split())

dijkstra(A)

path = [B]
now = B
while now != A:
    now = prev_node[now]
    path.append(now)

path.reverse()

print(costs[B])
print(len(path))
print(*path)