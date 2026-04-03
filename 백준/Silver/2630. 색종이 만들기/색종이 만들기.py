import sys

def check(si, sj, ei, ej):
    color = paper[si][sj]   # 시작점에 기준 색상 지정
    for i in range(si, ei):
        for j in range(sj, ej):
            if paper[i][j] != color:  # 중간에 다른 색상 나오면 False 리턴
                return False
    else:   # 만약 모두 기준 색상이랑 같으면
        color_cnt[color] += 1   # 알맞는 위치의 카운트 올려주고 
        return True             # True 리턴

def cut_paper(si, sj, ei, ej):
    if check(si, sj, ei, ej): # check 함수를 통과하면 (잘려진 색종이가 단색이면)
        return                # 리턴
    
    else:                     # 단색이 아니면 색종이를 4등분
        mi = (si + ei) // 2   # 나눌 때 사용할 중간 값 계산
        mj = (sj + ej) // 2
        '''
        잘려진 색종이 위치 구분
        1 2
        3 4
        '''
        cut_paper(si, sj, mi, mj) # 1번 색종이
        cut_paper(si, mj, mi, ej) # 2번 색종이
        cut_paper(mi, sj, ei, mj) # 3번 색종이
        cut_paper(mi, mj, ei, ej) # 4번 색종이

#########################################################################

N = int(sys.stdin.readline())
paper = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

color_cnt = [0, 0] # 흰색: 0, 파랑: 1
cut_paper(0, 0, N, N)

for ans in color_cnt:
    print(ans)