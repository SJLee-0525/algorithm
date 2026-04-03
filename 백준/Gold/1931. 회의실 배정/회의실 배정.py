import sys

N = int(sys.stdin.readline()) # 회의 개수
time_table = [tuple(map(int, sys.stdin.readline().split())) for _ in range(N)]
time_table.sort(key=lambda x:(x[1], x[0])) # 종료 시간 기준으로 정렬 (2순위 시작시간)

cnt = 0
able = 0 # 시작할 수 있는지 판단하는 시간 기준점
for start, end in time_table: # 타임테이블에서 시작, 종료 시간 가져와서
    if able <= start:         # 만약 시작 시간이 기준점 이후라면
        cnt += 1              # 카운트 늘려주고
        able = end            # 기준점은 해당 회의의 종료 시간으로 재할당

print(cnt)