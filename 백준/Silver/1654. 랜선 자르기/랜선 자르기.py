import sys

k, n = tuple(map(int, sys.stdin.readline().split()))

lan_cables = []
for _ in range(k):
    lan_cables.append(int(sys.stdin.readline()))

lan_cables.sort()

left, right = 1, lan_cables[-1]

while left <= right:    
    cut_count = 0
    mid = (left + right) // 2
    for lan_cable in lan_cables:
        cut_count += (lan_cable // mid)
    if cut_count < n:
        right = mid - 1
    elif cut_count >= n:
        left = mid + 1

print(right)