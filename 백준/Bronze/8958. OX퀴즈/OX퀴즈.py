n = int(input())

for _ in range(n):
    answer = list(input())
    
    temp = 1
    score = 0
    for ans in answer:
        if ans == 'O':
            score += temp
            temp += 1
        elif ans == 'X':
            temp = 1
            
    print(score)