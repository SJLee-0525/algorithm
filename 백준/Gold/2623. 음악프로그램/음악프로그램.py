import sys

def searchSeq():
    global seq, cnt

    flag = False # flag 할당
    for singer in range(1, N + 1):
        if not singersNeed[singer] and not check[singer]: # 자신의 순서 전에 필요한 가수가 더 없고, 출연 순서에 들어간 적이 없으면
            check[singer] = True        # 해당 가수 출연 표시
            seq += str(singer) + '\n'   # 순서에 추가
            cnt += 1                    # 가수 수 카운트
            flag = True                 # 해당 반복에서 변동이 있었음을 표시
            for adjSinger in adjSingers[singer]: # 출연 순서에 들어간 가수가 인접한 다음 출연자들을 돌면서
                singersNeed[adjSinger] -= 1      # 필요한 사전 출연 순서 감소 ?

    return flag # 변동 여부 반환 (False면 아예 불가능하다는 것)

###################################################################

N, M = map(int, sys.stdin.readline().split()) # 가수 수, PD 수

adjSingers = [[] for _ in range(N + 1)] # 정방향으로 봤을 때 인접한 가수 목록 담을 인접 리스트
singersNeed = [0] * (N + 1)             # 해당 가수가 출연 순서에 들어갈 수 있는지 체크하는 리스트

for pd in range(M):
    charge, *singers = map(int, sys.stdin.readline().split()) # pd가 맡은 가수 수, 가수 순서
    for s in range(1, charge):
        adjSingers[singers[s - 1]].append(singers[s]) # 앞에서부터 순차적으로 adjSingers 배열에 인접한 가수 추가
        singersNeed[singers[s]] += 1                  # 역방향으로 몇 명 필요한지 singersNeed 배열에 값 추가

# print(adjSingers)
# print(singersNeed)

seq = '' # 출연 순서 담을 문자열
cnt = 0  # 가수가 순서에 몇 명 들어갔는지 카운트용
check = [False] * (N + 1) # 해당 가수가 출연 순서에 추가 됐는지 확인용

while 1:
    flag = searchSeq() # 출연 순서를 탐색하고, 가능 여부를 반환 받음
    if cnt == N or not flag: # 만약 순서가 완성됐거나, 불가능하다는 응답이 오면 반복 중지
        break

# 결과에 따라 출력
if cnt != N:
    print(0)
else:
    print(seq)
