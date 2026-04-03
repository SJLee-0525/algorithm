import sys


def searchSeq():
    global seq, num

    flag = False  # 학생을 추가할 수 있는지 여부를 저장하는 플래그 변수

    for student in range(1, N + 1):
        if needStudents[student] or check[student]: # 현재 학생이 줄을 서기 위해 필요한 학생이 남았거나, 이미 체크한 학생이면 건너뜀
            continue

        flag = True             # 변동 사항 있으면 True
        check[student] = True   # 현재 학생을 줄에 섰다고 표시
        num += 1                # 줄 선 학생 수 증가
        seq += str(student) + " "  # 순서 추가

        # 현재 학생에 의해 영향을 받는(줄 세울 수 있게 되는) 학생들의 필요 조건을 하나씩 감소
        for adjStudent in adjStudents[student]:
            needStudents[adjStudent] -= 1

    return flag  # 줄 선 학생이 있는지 여부 반환

############################################################################

N, M = map(int, sys.stdin.readline().split()) # 학생 수, 비교 횟수

adjStudents = [[] for _ in range(N + 1)]  # 각 학생이 영향을 주는 학생들을 저장하는 리스트
needStudents = [0] * (N + 1)              # 각 학생이 줄을 서기 위해 필요한 학생 수

for _ in range(M):
    s1, s2 = map(int, sys.stdin.readline().split())  # s1이 s2보다 키가 작음
    adjStudents[s1].append(s2)  # s1의 인접한 학생에 s2 추가
    needStudents[s2] += 1       # s2가 줄을 서기 위해서 필요한 학생 수 추가

# print(adjStudents)
# print(needStudents)

num = 0  # 현재 줄 선 학생 수
seq = "" # 결과 값 문자열
check = [False] * (N + 1)  # 줄 선 여부 기록

while 1:
    flag = searchSeq()  # 줄 세우고 선 여부 반환
    if num == N or not flag:  # 더 이상 줄을 세울 수 없으면 종료
        break

print(seq)
