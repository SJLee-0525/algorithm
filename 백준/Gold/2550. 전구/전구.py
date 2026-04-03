import sys
from bisect import bisect_left

N = int(sys.stdin.readline().strip())

switches = list(map(int, sys.stdin.readline().split()))
lights = list(map(int, sys.stdin.readline().split()))

lightsIdx = {bulb: i for i, bulb in enumerate(lights, start=1)}
switchToBulb = [(lightsIdx[switch], switch) for switch in switches]

# LIS
dp = [switchToBulb[0][0]]
LIS = [(0, switchToBulb[0][1])]  # (LIS에서의 위치, 스위치 번호)

for i in range(1, N):
    idx, switch = switchToBulb[i]

    if idx > dp[-1]:
        dp.append(idx)
        LIS.append((len(dp) - 1, switch))
    else:
        dpIdx = bisect_left(dp, idx)
        dp[dpIdx] = idx
        LIS.append((dpIdx, switch))

# LIS 역추적
LISLength = len(dp)
cnt = LISLength - 1
res = [0] * LISLength

for idx, switch in reversed(LIS):
    if cnt == idx:
        res[idx] = switch
        cnt -= 1
    if cnt < 0:
        break

res.sort()

# 정답 출력
print(LISLength)
print(*res)
