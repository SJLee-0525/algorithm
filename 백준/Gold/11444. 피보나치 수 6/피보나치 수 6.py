import sys

def fibo(n):
    if memo.get(n):
        return memo[n]
    else:
        if n % 2 == 1:
            memo[n] = (fibo(n // 2) ** 2 + fibo(n // 2 + 1) ** 2) % 1000000007
        else:
            memo[n] = ((fibo(n // 2 - 1) * 2 + fibo(n // 2)) * fibo(n // 2)) % 1000000007
        return memo[n]

#####################################################

N = int(sys.stdin.readline())

memo = {
    0: 0,
    1: 1,
    2: 1,
}

print(fibo(N))
