import sys, heapq

di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def dijkstra():
    priorityQueue = []
    heapq.heappush(priorityQueue, (0, 0, 0))

    switchCnts = [[10000001] * N for _ in range(N)]
    switchCnts[0][0] = 0

    while priorityQueue:
        currSwitchCnt, i, j = heapq.heappop(priorityQueue)
        if switchCnts[i][j] < currSwitchCnt:
            continue
        for k in range(4):
            mi, mj = i + di[k], j + dj[k]
            if 0 <= mi < N and 0 <= mj < N:
                if maze[mi][mj] and switchCnts[mi][mj] > currSwitchCnt:
                    switchCnts[mi][mj] = currSwitchCnt
                    heapq.heappush(priorityQueue, (currSwitchCnt, mi, mj))
                elif not maze[mi][mj] and switchCnts[mi][mj] > currSwitchCnt + 1:
                    switchCnts[mi][mj] = currSwitchCnt + 1
                    heapq.heappush(priorityQueue, (currSwitchCnt + 1, mi, mj))

    return switchCnts[N - 1][N - 1]

########################################################################

N = int(sys.stdin.readline())
maze = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

print(dijkstra())