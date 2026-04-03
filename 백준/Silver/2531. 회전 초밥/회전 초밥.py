import sys

N, D, K, C = map(int, sys.stdin.readline().split())
# N: 접시 수, D: 초밥 가짓 수, K: 연속해서 먹는 접시 수, C: 쿠폰 번호

plates = [0] * N
for n in range(N):
    plates[n] = int(sys.stdin.readline())

# print(plates)

kind = [0] * (D + 1)
kind[C] = 1

result = 1
for k in range(K):
    if not kind[plates[k]]:
        result += 1
    kind[plates[k]] += 1

temp = result
for start in range(1, N):
    kind[plates[start - 1]] -= 1
    if not kind[plates[start - 1]]:
        temp -= 1

    if not kind[plates[(start + K - 1) % N]]:
        temp += 1
    kind[plates[(start + K - 1) % N]] += 1

    # print(start, plates[start], temp, kind)
    result = max(result, temp)

print(result)