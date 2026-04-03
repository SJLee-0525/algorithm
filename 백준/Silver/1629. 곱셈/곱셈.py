import sys
def solve(a,b,c):
    if b == 1: # 거듭제곱을 할 필요없음 바로 a의 나머지 리턴
        return a % c
    else:
        k = solve(a, b // 2, c)
        if b % 2 == 0: # b가 짝수라면
            return (k * k) % c
        else: # b가 홀수라면
            return (k * k *a) % c

######################################################

a,b,c = map(int, sys.stdin.readline().split())
print(solve(a,b,c))
