import sys

def rotate(x, y, pivotX, pivotY):
    """ x, y 좌표를 기준점 기준으로 시계 방향 90도 회전 """
    newX = pivotX - (y - pivotY)
    newY = pivotY + (x - pivotX)

    return newX, newY

def dragonCurve(x, y, d, g):
    """x, y 에서 시작, 방향 d로 g세대까지 드래곤 커브를 생성"""
    coords = [(x, y), (x + dx[d], y + dy[d])] # 0세대 점 추가

    for gen in range(g):
        pivotX, pivotY = coords[-1] ######## 마지막 좌표가 기준점
        newCoords = []

        ###### 기존 점들을 거꾸로 순회하면서 회전
        for cx, cy in reversed(coords):
            newCoords.append(rotate(cx, cy, pivotX, pivotY))

        coords.extend(newCoords)

    return set(coords)

def countSquare(dragonCurves):
    grid = [[0] * 101 for _ in range(101)]

    # 그리드에 만든 커브 좌표들 추가
    for cx, cy in dragonCurves:
        grid[cx][cy] = 1

    cnt = 0
    for x in range(100):
        for y in range(100):
            if 1 == grid[x][y] == grid[x + 1][y] == grid[x][y + 1] == grid[x + 1][y + 1]:
                cnt += 1

    return cnt

####################################################

N = int(sys.stdin.readline())

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

dragonCurves = set()
for _ in range(N):
    x, y, d, g = map(int, sys.stdin.readline().split())
    dragonCurves.update(dragonCurve(x, y, d, g))

print(countSquare(dragonCurves))