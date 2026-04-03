money_list = [25, 10, 5, 1]
n = int(input())

for i in range(n):
    money = int(input())
    cash_list = []

    for j in money_list:
        cash = money // j
        cash_list.append(cash)
        money -= cash * j
    
    print(*cash_list)