import sys

def find_winner(type):
    cross1, cross2 = 0, 0
    for i in range(3):
        garo, sero = 0, 0
        for j in range(3):
            if board[i][j] == type:
                garo += 1
            if board[j][i] == type:
                sero += 1
            if i == j and board[i][j] == type:
                cross1 += 1
            if i == 3 - j - 1 and board[i][j] == type:
                cross2 += 1

        if garo == 3 or sero == 3:
            return True

    if cross1 == 3 or cross2 == 3:
        return True

    return False

def ttt_game():
    player_X = find_winner('X')
    player_O = find_winner('O')

    if player_X and player_O: # 둘 다 승리는 불가
        return False

    elif X_count == O_count: # O 차례: X가 이기면 안 됨
        if player_O:         # O가 이겼다면 종료 가능
            return True

    elif X_count == O_count + 1:    # X 차례: O가 이기면 안 됨
        if player_O:
            return False
        elif player_X or X_count + O_count == 9: # 승패 관계 없이 더 둘 데가 없다면 가능
            return True

    return False    # 이외의 경우: 나올 수 없음

##########################################################

board = [[0] * 3 for _ in range(3)]

while 1:
    inputData = sys.stdin.readline().rstrip()
    if inputData == 'end':
        break
    X_count, O_count = 0, 0
    for i in range(9):
        board[i // 3][i % 3] = inputData[i]
        if inputData[i] == 'X':
            X_count += 1
        elif inputData[i] == 'O':
            O_count += 1

    result = ttt_game()
    if result:
        print('valid')
    else:
        print('invalid')