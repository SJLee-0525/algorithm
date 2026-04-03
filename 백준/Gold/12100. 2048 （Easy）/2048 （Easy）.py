from collections import deque
import sys

def perm(lv):
    if lv == 5:
        moveBoard(0, board)
        return

    for d in range(4):
        sequence.append(d)
        perm(lv + 1)
        sequence.pop()

# 우 하 좌 상
def moveBoard(lv, inputBoard):
    global result

    if lv == 5:
        for i in range(N):
            for j in range(N):
                result = max(result, inputBoard[i][j])
        return

    newBoard = [[0] * N for _ in range(N)]
    if sequence[lv] == 0:
        for i in range(N):
            valueList = []
            for j in range(N - 1, -1, -1):
                if inputBoard[i][j]:
                    valueList.append([inputBoard[i][j], False])

            if valueList:
                temp = [valueList[0]]
                if len(valueList) >= 2:
                    for v in range(1, len(valueList)):
                        if temp[-1][0] == valueList[v][0] and temp[-1][1] == valueList[v][1] == False:
                            temp[-1][0] += valueList[v][0]
                            temp[-1][1] = True
                        else:
                            temp.append(valueList[v])

                for t in range(len(temp)):
                    newBoard[i][N - 1 - t] = temp[t][0]

    elif sequence[lv] == 1:
        for i in range(N):
            valueList = []
            for j in range(N - 1, -1, -1):
                if inputBoard[j][i]:
                    valueList.append([inputBoard[j][i], False])

            if valueList:
                temp = [valueList[0]]
                if len(valueList) >= 2:
                    for v in range(1, len(valueList)):
                        if temp[-1][0] == valueList[v][0] and temp[-1][1] == valueList[v][1] == False:
                            temp[-1][0] += valueList[v][0]
                            temp[-1][1] = True
                        else:
                            temp.append(valueList[v])

                for t in range(len(temp)):
                    newBoard[N - 1 - t][i] = temp[t][0]

    elif sequence[lv] == 2:
        for i in range(N):
            valueList = []
            for j in range(N):
                if inputBoard[i][j]:
                    valueList.append([inputBoard[i][j], False])

            if valueList:
                temp = [valueList[0]]
                if len(valueList) >= 2:
                    for v in range(1, len(valueList)):
                        if temp[-1][0] == valueList[v][0] and temp[-1][1] == valueList[v][1] == False:
                            temp[-1][0] += valueList[v][0]
                            temp[-1][1] = True
                        else:
                            temp.append(valueList[v])

                for t in range(len(temp)):
                    newBoard[i][t] = temp[t][0]

    elif sequence[lv] == 3:
        for i in range(N):
            valueList = []
            for j in range(N):
                if inputBoard[j][i]:
                    valueList.append([inputBoard[j][i], False])

            if valueList:
                temp = [valueList[0]]
                if len(valueList) >= 2:
                    for v in range(1, len(valueList)):
                        if temp[-1][0] == valueList[v][0] and temp[-1][1] == valueList[v][1] == False:
                            temp[-1][0] += valueList[v][0]
                            temp[-1][1] = True
                        else:
                            temp.append(valueList[v])

                for t in range(len(temp)):
                    newBoard[t][i] = temp[t][0]

    moveBoard(lv + 1, newBoard)


N = int(sys.stdin.readline())
board = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

sequence = []
result = 0
perm(0)

print(result)