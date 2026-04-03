import heapq
import sys

N = int(sys.stdin.readline())

H = []

for _ in range(N):
    prompt = int(sys.stdin.readline())
    if prompt:
        heapq.heappush(H, prompt)
    else:
        if H:
            print(heapq.heappop(H))
        else:
            print(0)