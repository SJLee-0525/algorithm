import sys

N, K = map(int, sys.stdin.readline().split())

female = [0] * 7
male = [0] * 7

for _ in range(N):
    gender, grade = map(int, sys.stdin.readline().split())
    if gender == 0: # 여자면, 
        female[grade] += 1 # 학년을 인덱스로 female에 카운트 # [0, 1, 2, 1, 0, 1, 1]
    else:
        male[grade] += 1 # [0, 2, 1, 3, 1, 2, 1]

# 카운트된 배열을 순회하며 라이브러리 없이 반올림 해보기
room = 0
for i in range(7):
    if female[i] % K == 0: 
        room += female[i] // K
    elif female[i] % K != 0: 
        room += (female[i] // K) + 1

    if male[i] % K == 0:
        room += male[i] // K
    elif male[i] % K != 0:
        room += (male[i] // K) + 1

print(room)