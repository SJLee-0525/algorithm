# 부동소수점 관련 반올림 문제
# 파이썬 내장 round를 사용하면 오답처리됨\

def m_round(a):
    if a - int(a) >= 0.5:
        return int(a) + 1
    else:
        return int(a)

from sys import *

n = int(stdin.readline())

l = []
if n == 0:
    print(0)
else:
    for _ in range(n):
        l.append(int(stdin.readline()))
    
    l.sort()
    p = m_round(n * 0.15)
    if p > 0:
        print(m_round(sum(l[p:-p])/len(l[p:-p])))
    else:
        print(m_round(sum(l)/n))
