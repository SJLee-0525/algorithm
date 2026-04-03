import sys
import heapq

def enQ(prompt):
    if prompt >= 0:
        heapq.heappush(H, (prompt, 1))
    else:
        heapq.heappush(H, (-prompt, -1))

def deQ():
    if H:
        temp = heapq.heappop(H)
        rst = temp[0] * temp[1]
    else:
        rst = 0
    print(rst)
    
#######################################################

N = int(sys.stdin.readline())

H = []

for _ in range(N):
    prompt = int(sys.stdin.readline())
    if prompt:
        enQ(prompt)
    else:
        deQ()



