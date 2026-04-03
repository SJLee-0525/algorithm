import sys, heapq

def dijkstra(si: int, sj: int, ei: int, ej: int) -> int:
    priority_queue = [(0, si, sj)]

    visited[si][sj] = 0

    while priority_queue:
        dist, i, j = heapq.heappop(priority_queue)

        if visited[i][j] < dist:
            continue

        for k in range(4):
            mi, mj = i, j
            temp_dist = 0

            while ICE_MAZE[mi][mj] != 'H':
                mi += DI[k]
                mj += DJ[k]

                if ICE_MAZE[mi][mj].isdigit(): # 숫자면 거리 추가하고 건너뜀
                    temp_dist += int(ICE_MAZE[mi][mj])
                    continue

                if ICE_MAZE[mi][mj] == "R":    # R을 만나면 1칸 뒤로 이동 (돌)
                    mi -= DI[k]
                    mj -= DJ[k]

                if visited[mi][mj] > dist + temp_dist:  # R이나 E를 만났는데, 최단거리면 갱신
                    visited[mi][mj] = dist + temp_dist

                    if ICE_MAZE[mi][mj] != "E":         # 도착지가 아니면 힙 추가
                        heapq.heappush(priority_queue, (dist + temp_dist, mi, mj))

                break

    return -1 if visited[ei][ej] == INF else visited[ei][ej]

###################################################################################################

INF = float('inf')

DI = [1, 0, -1, 0]
DJ = [0, 1, 0, -1]


W, H = map(int, sys.stdin.readline().split())

ICE_MAZE = [["H"] * (W + 2)] + [["H"] + list(sys.stdin.readline().rstrip()) + ["H"] for _ in range(H)]  + [["H"] * (W + 2)]
visited = [[INF] * (W + 2) for _ in range(H + 2)]

start, end = [-1, -1], [-1, -1]

for i in range(1, H + 1):
    for j in range(1, W + 1):
        if ICE_MAZE[i][j] == "T":
            start = [i, j]
        elif ICE_MAZE[i][j] == "E":
            end = [i, j]

res = dijkstra(start[0], start[1], end[0], end[1])

print(res)