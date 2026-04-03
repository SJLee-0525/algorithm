while 1:
    l = list(input())
    if l == ['0']:
        break
    re_l = l[::-1]
    if l == re_l:
        print('yes')
    else:
        print('no')