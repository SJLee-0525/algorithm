l = []
for _ in range(3):
    l.append(input())

for i in range(3):
    if l[i] != 'Fizz' and l[i] != 'Buzz' and l[i] != 'FizzBuzz':
        count = 3 - i
        temp = l[i]
        temp = int(temp)
        temp += count

if temp % 3 == 0 and temp % 5 == 0:
    print('FizzBuzz')    
elif temp % 3 == 0:
    print('Fizz')
elif temp % 5 == 0:
    print('Buzz')
else:
    print(temp)