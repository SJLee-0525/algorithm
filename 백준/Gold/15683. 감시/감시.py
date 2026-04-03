import sys

di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

cctvDirDict = {
    1: [[0], [1], [2], [3]],
    2: [[0, 2], [1, 3]],
    3: [[0, 1], [1, 2], [2, 3], [3, 0]],
    4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
    5: [[0, 1, 2, 3]]
}

def findCctvLoc():
    cnt = 0
    for i in range(N):
        for j in range(M):
            if office[i][j] == 0:
                cnt += 1
            elif office[i][j] < 6:
                cctvList.append((i, j))
    return cnt

def servail(lv, blindSpotCnt):
    global result

    if lv == len(cctvList):
        result = min(blindSpotCnt, result)
        return

    i, j = cctvList[lv]
    for info in cctvDirDict[office[i][j]]:
        cnt = 0
        changedLoc = []
        for k in info:
            mi, mj = i + di[k], j + dj[k]
            while 0 <= mi < N and 0 <= mj < M and office[mi][mj] != 6:
                if office[mi][mj] == 0:
                    cnt += 1
                    office[mi][mj] = -1
                    changedLoc.append((mi, mj))
                mi += di[k]
                mj += dj[k]

        servail(lv + 1, blindSpotCnt - cnt)

        while changedLoc:
            ci, cj = changedLoc.pop()
            office[ci][cj] = 0

##############################################################################

N, M = map(int, sys.stdin.readline().split())
office = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

cctvList = []
blindSpots = findCctvLoc()


result = 10000001
servail(0, blindSpots)

print(result)