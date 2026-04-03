import sys

N = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split()))
result = [0] * N

stack = [(0, towers[0])] # 스택에 첫번째 탑 넣어 놓고 시작 (탑 번호, 탑 높이)

for t in range(1, N):   # 첫번째 탑은 제외하고 반복
    if stack[-1][1] >= towers[t]:       # 만약 스택의 가장 상단에 있는 탑의 높이가 현재 탑보다 더 크거나 같다면
        result[t] = stack[-1][0] + 1    # 현재 탑의 결과를 스택의 가장 상단에 있는 탑의 위치로 기록
        stack.append((t, towers[t]))    # 현재 탑의 위치와 높이 데이터 삽입
    else:  # 만약 스택의 가장 상단에 있는 탑의 높이가 현재 탑보다 낮다면
        while stack and stack[-1][1] < towers[t]: # 스택에 데이터가 있으면서, 스택 최상단의 탑의 높이가 현재 탑의 높이보다 낮은 한
            stack.pop()     # 스택에서 뽑음
        if not stack:       # 만약 스택이 비면
            result[t] = 0   # 레이저를 수신할 수 있는 탑이 없음
        else:               # 스택에 탑이 여전히 남아있다면 (나보다 높은 탑이 있다는 것)
            result[t] = stack[-1][0] + 1 # 현재 탑의 결과를 스택의 가장 상단에 있는 탑의 위치로 기록
        stack.append((t, towers[t]))     # 다 한 후 스택에 현재 탑의 데이터 삽입

print(*result)
