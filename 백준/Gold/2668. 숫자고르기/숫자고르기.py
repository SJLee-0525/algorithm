import sys

def dfs(start):
    global result

    visited = [0] * (N + 1)

    stack = []
    temp = []

    now = start
    while 1:
        next = adjN[now]
        if not visited[next]:
            stack.append(now)
            temp.append(now)
            now = next
            visited[now] = 1
            if now == start:
                result.extend(temp)
                return

        elif stack:
            now = stack.pop()
        else:
            return

############################################

N = int(sys.stdin.readline())

adjN = [0] * (N + 1)
for i in range(1, N + 1):
    j = int(sys.stdin.readline())
    adjN[i] = j

result = []

for i in range(1, N + 1):
    if i not in result:
        dfs(i)

print(len(result))
result.sort()
for r in result:
    print(r)


