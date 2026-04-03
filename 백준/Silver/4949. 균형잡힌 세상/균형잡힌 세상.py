while 1: 
    a = input()

    if a[0] == '.':
        break
    
    li = []
    for s in a:
        if s == '(' or s == '[':
            li.append(s)
        elif s == ')':
            if len(li) != 0 and li[-1] == '(':
                li.pop()
            else:
                li.append(s)
        elif s == ']':
            if len(li) != 0 and li[-1] == '[':
                li.pop()
            else:
                li.append(s)
    
    if len(li) == 0:
        print('yes')
    else:
        print('no')