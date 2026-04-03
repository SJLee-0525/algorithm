import sys


V, E = map(int, sys.stdin.readline().split()) # V 마을 수 / E 경로 수

# 사전 준비: 2차원 그래프 초기화 후 v1 -> v2 가는 거리 할당
distances = [[100000001] * (V + 1) for _ in range(V + 1)]
for _ in range(E):
    v1, v2, dist = map(int, sys.stdin.readline().split())
    distances[v1][v2] = dist

# 모든 정점에서 모든 정점으로 가는 최소 거리 구하기
for transfer in range(1, V + 1):    # 반드시 경유할 지점
    for start in range(1, V + 1):   # 출발 도시
        for end in range(1, V + 1): # 도차 도시
            # start -> end 까지의 거리를 구하되, start -> transfer + transfer -> end을 구해서 이 중 최소값을 찾음
            distances[start][end] = min(distances[start][end], distances[start][transfer] + distances[transfer][end])

# 자기 자신 -> 자기 자신 마을로 돌아오는 거리 중 최소 값 구하기
result = 100000001
for city in range(1, V + 1):
    result = min(result, distances[city][city])

if result == 100000001:
    print(-1)
else:
    print(result)