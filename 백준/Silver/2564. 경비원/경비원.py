import sys

c, r = map(int, input().split()) # 가로 세로
N = int(sys.stdin.readline()) # 상점 개수

# 서 남 동 북 순으로 일자로 배열했다 생각
store_locations = []
for _ in range(N + 1): # 일부로 한 개 더 추가함. 내 위치까지 한 번에 넣게
    direction, meter = map(int, sys.stdin.readline().split())
    if direction == 1: # 북
        store_locations.append(r * 2 + c * 2 - meter)
    elif direction == 2: # 남
        store_locations.append(r + meter)
    elif direction == 3: # 서
        store_locations.append(meter)
    elif direction == 4: # 동
        store_locations.append(r * 2 + c - meter)

my_location = store_locations.pop() # 맨 마지막 원소는 내 위치니까 반환
# print(store_locations) # [26, 2, 13]
# print(my_location) # 8

result = 0
total_range = 2 * c + 2 * r # 직사각형 변의 총 길이
for store_location in store_locations: 
    temp_range = abs(my_location - store_location) # 일단 빼봄
    # 반대편 경로의 길이는 총 길이 - 방금 빼 본 길이: 그 중 작은거 고르고 연산
    result += min(temp_range, total_range - temp_range) 

print(result)