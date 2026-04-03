import sys

def dfs(planet, lv, time):
    global totalTime

    if lv == N:
        totalTime = min(totalTime, time)

    elif totalTime < time: # 가지치기
        return

    visited[planet] = 1
    for nextPlanet, needTime in enumerate(table[planet]):
        if visited[nextPlanet]:
            continue
        visited[nextPlanet] = 1
        dfs(nextPlanet, lv + 1, time + needTime)
        visited[nextPlanet] = 0

#########################################################################

N, K = map(int, sys.stdin.readline().split()) # 행성 수, 발사되는 행성 위치

table = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# 플로이드 워셜로 우선 각 행성간 짧은 거리를 계산한 후
for m in range(N):
    for s in range(N):
        for e in range(N):
            if table[s][e] > table[s][m] + table[m][e]:
                table[s][e] = table[s][m] + table[m][e]

# print(table)

totalTime = 100000001
visited = [0] * N

# dfs로 전부 돌아봄
dfs(K, 1, 0)

print(totalTime)

