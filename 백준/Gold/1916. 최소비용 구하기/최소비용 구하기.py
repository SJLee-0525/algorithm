import sys
import heapq

def dijkstra(start):
    costs[start] = 0 # 시작 노드에는 비용 0 삽입, 
    
    pq = []
    heapq.heappush(pq, (0, start))  # heapq는 맨 앞의 데이터를 기준으로 정렬되니까 비용을 앞으로
    
    while pq: # 우선 순위 큐가 빌 때ㅐ까지 반복
        cost, now = heapq.heappop(pq) # 가장 최소 비용으로 갈 수 있는 노드에 대한 정보 꺼내 이동
        if costs[now] < cost:   # 이미 현재 노드가 처리 됐다면 (더 저렴한 비용) skip
            continue

        for next in adjL[now]:  # 인접한 노드 확인
            next_city, next_cost = next 
            new_cost = cost + next_cost # 새로운 누적 값 (현재 까지의 누적 값 + 다음 도시 가중치)
            if new_cost >= costs[next_city]: # 만약 다음 도시를 가는 데에 비용이 더 많이 들면 스킵
                continue

            costs[next_city] = new_cost     # 아니라면 새로운 누적 값 할당
            heapq.heappush(pq, (new_cost, next_city))   # 우선 순위 큐에 삽입


###########################################################

N = int(sys.stdin.readline()) # 도시 수
M = int(sys.stdin.readline()) # 버스 노선 수

adjL = [[] for _ in range(N + 1)]   # 인접 리스트 생성
costs = [1000000001] * (N + 1)      # 누적 비용을 저장할 배열

# 버스 정보 입력
for _ in range(M):
    s, e, cost = map(int, sys.stdin.readline().split())
    adjL[s].append((e, cost))   # 인접한 도시와, 비용을 추가

A, B = map(int, sys.stdin.readline().split()) # 출발 도시, 도착 도시

dijkstra(A) # 출발 도시를 기준으로 다익스트라 실행

print(costs[B])